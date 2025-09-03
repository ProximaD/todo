import { useEffect, useState } from 'react';
import { Search, User, LogOut, Settings } from 'lucide-react';
import api from './api';

export default function App() {
  const [page, setPage] = useState('login');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      api.get('/auth/me').then((res) => {
        setUser(res.data.user); setPage('app');
      }).catch(() => localStorage.removeItem('token'));
    }
  }, []);

  if (page === 'login') return <Auth onSuccess={(u)=>{setUser(u); setPage('app');}} />;
  return <Dashboard user={user} onLogout={() => { localStorage.removeItem('token'); setPage('login'); }} />;
}

function Auth({ onSuccess }) {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const submit = async (e) => {
    e.preventDefault(); setError('');
    try {
      const path = isLogin ? '/auth/login' : '/auth/signup';
      const payload = isLogin ? { email, password } : { name, email, password };
      const { data } = await api.post(path, payload);
      localStorage.setItem('token', data.token);
      onSuccess(data.user);
    } catch (err) {
      setError(err?.response?.data?.message || 'Failed');
    }
  };

  return (
    <div className="min-h-screen grid place-items-center bg-gray-50 p-6">
      <form onSubmit={submit} className="w-full max-w-sm bg-white p-6 rounded-2xl shadow">
        <h1 className="text-2xl font-bold mb-4">{isLogin ? 'Login' : 'Create account'}</h1>
        {!isLogin && <input className="input" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} />}
        <input className="input" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <input className="input" type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        {error && <p className="text-red-600 text-sm mb-2">{error}</p>}
        <button className="btn w-full" type="submit">{isLogin ? 'Login' : 'Sign up'}</button>
        <p className="text-sm text-center mt-3">
          {isLogin ? 'No account?' : 'Have an account?'}{' '}
          <button type="button" className="text-blue-600" onClick={()=>setIsLogin(!isLogin)}>
            {isLogin ? 'Sign up' : 'Login'}
          </button>
        </p>
      </form>
    </div>
  );
}

function Dashboard({ user, onLogout }) {
  const [cats, setCats] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [newCat, setNewCat] = useState('');
  const [color, setColor] = useState('#0ea5e9');
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [due, setDue] = useState('');
  const [catId, setCatId] = useState('');
  const [q, setQ] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const load = async () => {
    const [{ data: catData }, { data: taskData }] = await Promise.all([
      api.get('/categories'),
      api.get('/tasks', { params: { q } })
    ]);
    setCats(catData); setTasks(taskData);
  };

  useEffect(() => { load(); }, [q]);

  const addCategory = async (e) => {
    e.preventDefault();
    if (!newCat) return;
    await api.post('/categories', { name: newCat, color });
    setNewCat(''); load();
  };

  const addTask = async (e) => {
    e.preventDefault();
    await api.post('/tasks', { title, description: desc, dueDate: due, category: catId || undefined });
    setTitle(''); setDesc(''); setDue(''); setCatId(''); load();
  };

  const toggle = async (id) => { await api.patch(`/tasks/${id}/toggle`); load(); };
  const removeTask = async (id) => { await api.delete(`/tasks/${id}`); load(); };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-semibold text-gray-800">Hello, {user?.name || 'User'} 👋</h1>
        
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <input
              className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white/70 backdrop-blur-sm shadow-sm transition w-64"
              placeholder="Search tasks..."
              value={q}
              onChange={(e)=>setQ(e.target.value)}
            />
          </div>

          {/* User menu */}
          <div className="relative">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white hover:opacity-90 transition"
            >
              <User size={20} />
            </button>
            {menuOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-xl py-2 z-10 border">
                <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 w-full text-left">
                  <Settings size={16}/> Settings
                </button>
                <button 
                  className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-gray-50 w-full text-left"
                  onClick={onLogout}
                >
                  <LogOut size={16}/> Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6 pb-10">
        {/* Categories */}
        <section className="md:col-span-1 bg-white/80 backdrop-blur-sm p-5 rounded-2xl shadow-lg">
          <h2 className="font-semibold mb-3 text-gray-800">Categories</h2>
          <form onSubmit={addCategory} className="flex gap-2 mb-4">
            <input className="input flex-1" placeholder="New category" value={newCat} onChange={(e)=>setNewCat(e.target.value)} />
            <input type="color" className="w-10 h-10 rounded" value={color} onChange={(e)=>setColor(e.target.value)} />
            <button className="btn bg-blue-500 text-white px-4 rounded-lg hover:bg-blue-600" type="submit">Add</button>
          </form>
          <ul className="space-y-2">
            {cats.map(c => (
              <li key={c._id} className="flex items-center gap-2 text-gray-700">
                <span className="inline-block w-3 h-3 rounded-full" style={{ background: c.color }} />
                <span>{c.name}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Tasks */}
        <section className="md:col-span-2 bg-white/80 backdrop-blur-sm p-5 rounded-2xl shadow-lg">
          <h2 className="font-semibold mb-3 text-gray-800">New Task</h2>
          <form onSubmit={addTask} className="grid md:grid-cols-5 gap-3 mb-6">
            <input className="input md:col-span-2" placeholder="Title" value={title} onChange={(e)=>setTitle(e.target.value)} />
            <input className="input md:col-span-2" placeholder="Description" value={desc} onChange={(e)=>setDesc(e.target.value)} />
            <input className="input" type="date" value={due} onChange={(e)=>setDue(e.target.value)} />
            <select className="input md:col-span-2" value={catId} onChange={(e)=>setCatId(e.target.value)}>
              <option value="">No category</option>
              {cats.map(c => <option key={c._id} value={c._id}>{c.name}</option>)}
            </select>
            <button className="btn bg-green-500 text-white hover:bg-green-600 md:col-span-1 rounded-lg" type="submit">Add</button>
          </form>

          <h2 className="font-semibold mb-3 text-gray-800">Tasks</h2>
          <ul className="space-y-3">
            {tasks.map(t => (
              <li key={t._id} className="p-4 rounded-xl border bg-white hover:shadow-md transition flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <input type="checkbox" checked={t.completed} onChange={()=>toggle(t._id)} className="w-5 h-5" />
                  <div>
                    <div className="font-medium text-gray-800">{t.title}</div>
                    <div className="text-sm text-gray-600">{t.description}</div>
                    <div className="text-xs text-gray-500">
                      {t.dueDate ? new Date(t.dueDate).toLocaleDateString() : 'No due date'}
                      {t.category ? ` • ${t.category.name}` : ''}
                    </div>
                  </div>
                </div>
                <button className="text-red-500 hover:text-red-700 transition" onClick={()=>removeTask(t._id)}>Delete</button>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
