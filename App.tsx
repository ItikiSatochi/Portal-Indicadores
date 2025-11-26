import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  FileText, 
  TrendingUp, 
  DollarSign, 
  AlertCircle, 
  CheckSquare, 
  CreditCard, 
  Package, 
  ShoppingCart, 
  Globe, 
  BrainCircuit,
  Server,
  Monitor,
  Wifi,
  ShieldAlert,
  Ticket,
  Users,
  MessageSquare,
  History,
  Activity,
  BarChart3,
  Cpu,
  UserCircle2,
  List,
  ClipboardCheck,
  AlertTriangle
} from 'lucide-react';

// --- Types ---

type MenuItem = {
  label: string;
  icon: React.ReactNode;
  active?: boolean;
};

type MenuSection = {
  title: string;
  items: MenuItem[];
};

// --- Components ---

const SidebarItem: React.FC<MenuItem> = ({ label, icon, active }) => (
  <div 
    className={`
      flex items-center gap-3 px-4 py-2.5 mb-1 cursor-pointer transition-all duration-200 rounded-r-full mr-4
      ${active 
        ? 'bg-brand-blue text-white shadow-md' 
        : 'text-brand-blue hover:bg-blue-50'
      }
    `}
  >
    <span className={`${active ? 'text-white' : 'text-brand-blue'}`}>
      {icon}
    </span>
    <span className="text-sm font-medium">{label}</span>
  </div>
);

const Sidebar: React.FC = () => {
  const menuData: MenuSection[] = [
    {
      title: "GESTÃO",
      items: [
        { label: "Visão Geral", icon: <LayoutDashboard size={18} />, active: true },
      ]
    },
    {
      title: "CHAMADOS",
      items: [
        { label: "Chamados", icon: <BarChart3 size={18} /> },
        { label: "Responsável", icon: <UserCircle2 size={18} /> },
        { label: "Categoria", icon: <List size={18} /> },
        { label: "Analise Pessoal", icon: <ClipboardCheck size={18} /> },
        { label: "Criticidade", icon: <AlertTriangle size={18} /> },
        { label: "Performance", icon: <LayoutDashboard size={18} /> },
      ]
    },
    {
      title: "INFRAESTRUTURA",
      items: [
        { label: "Servidores", icon: <Server size={18} /> },
        { label: "Rede e Conectividade", icon: <Wifi size={18} /> },
        { label: "Ativos (Inventário)", icon: <Monitor size={18} /> },
        { label: "Segurança", icon: <ShieldAlert size={18} /> },
      ]
    },
    {
      title: "FERRAMENTAS IA",
      items: [
        { label: "Diagnóstico Auto.", icon: <BrainCircuit size={18} /> },
      ]
    }
  ];

  return (
    <aside className="w-64 h-full bg-white flex flex-col py-8 shadow-lg z-20 hidden md:flex">
      {/* Logo Area */}
      <div className="px-6 mb-8 flex flex-col gap-4 select-none">
        {/* Custom Icon Logo */}
        <div className="flex items-center">
          <div className="h-12 w-12 bg-gradient-to-tr from-brand-blue to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
            <Ticket size={28} className="text-white" strokeWidth={2} />
          </div>
        </div>

        {/* App Title */}
        <div className="px-1">
          <h1 className="text-lg font-black text-brand-blue tracking-tight leading-none uppercase">
            CHAMADOS
          </h1>
          <h1 className="text-lg font-black text-gray-700 tracking-tight leading-none uppercase mt-0.5">
            E DEMANDAS
          </h1>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar">
        {menuData.map((section, idx) => (
          <div key={idx} className="mb-6">
            <h3 className="px-8 text-[10px] font-bold text-gray-400 tracking-widest mb-3 uppercase">
              {section.title}
            </h3>
            <div className="pl-4">
              {section.items.map((item, itemIdx) => (
                <SidebarItem key={itemIdx} {...item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

const MainContent: React.FC = () => {
  return (
    <main className="flex-1 relative h-full bg-white overflow-hidden flex items-center justify-center">
      
      {/* Background Graphic Layer */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        {/* The Blue Diagonal Shape */}
        <div 
          className="absolute right-0 top-0 bottom-0 bg-brand-blue w-[50%] h-full shadow-2xl"
          style={{
            clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)'
          }}
        ></div>
      </div>

      {/* Floating Center Badge (The big white circle) */}
      <div className="absolute right-[28%] top-[50%] transform translate-x-1/2 -translate-y-1/2 z-30 hidden lg:block">
        <div className="w-32 h-32 md:w-48 md:h-48 bg-white rounded-full shadow-[0_20px_50px_-10px_rgba(0,0,0,0.3)] flex items-center justify-center relative">
          {/* Inner Circle content */}
          <div className="flex flex-col items-center justify-center text-brand-blue">
            <BarChart3 size={64} strokeWidth={2} />
          </div>
          
          {/* Orbiting Icon 1 (Top Right) */}
          <div className="absolute top-0 -right-4 bg-gray-500/90 backdrop-blur-sm p-3 rounded-2xl text-white shadow-xl animate-bounce duration-[3000ms]">
            <TrendingUp size={24} />
          </div>

          {/* Orbiting Icon 2 (Bottom Left) - Changed to dark slate bg for visibility against blue background without using white */}
          <div className="absolute bottom-4 -left-6 bg-slate-800 p-3 rounded-2xl text-white shadow-xl animate-pulse">
            <Activity size={24} />
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:px-12 flex h-full">
        
        {/* Left Side (Text) - Adjusted Alignment to Left */}
        <div className="flex-1 flex flex-col justify-center items-start pl-4 lg:pl-12 text-left">
          
          {/* Tag */}
          <div className="mb-6 bg-blue-50 px-5 py-2 rounded-full inline-flex items-center gap-2 shadow-sm border border-blue-100">
            <div className="w-2 h-2 rounded-full bg-brand-blue animate-pulse"></div>
            <span className="text-[11px] font-bold text-brand-blue tracking-widest uppercase">
              Operações & Suporte
            </span>
          </div>

          {/* Main Title */}
          <div className="flex flex-col leading-none select-none">
            <h1 className="text-6xl lg:text-8xl font-black text-brand-blue tracking-tighter drop-shadow-sm">
              CHAMADOS
            </h1>
            <h1 className="text-5xl lg:text-7xl font-black text-gray-600 tracking-tighter mt-[-5px] lg:mt-[-10px] opacity-90">
              E DEMANDAS DE TI
            </h1>
          </div>

          {/* Subtitle / Company Name */}
          <p className="mt-8 text-gray-500 font-medium text-xl tracking-wide max-w-lg">
            Gestão centralizada de solicitações técnicas e infraestrutura.
          </p>
          
          {/* Decorative faint underline effect */}
          <div className="h-1.5 w-24 bg-gradient-to-r from-brand-blue via-blue-300 to-transparent mt-8 rounded-full opacity-30"></div>

        </div>

        {/* Right Side (Visual Spacer to match the diagonal cut) */}
        <div className="w-[10%] lg:w-[35%]"></div>
      </div>

      {/* Bottom Tooltip */}
      <div className="absolute bottom-8 left-12 z-20">
        <div className="bg-white/90 backdrop-blur border border-gray-100 shadow-lg rounded-lg px-5 py-4 flex items-center gap-3 max-w-md transition-all hover:shadow-xl hover:-translate-y-1">
          <div className="bg-brand-blue/10 p-2 rounded-full text-brand-blue">
             <BrainCircuit size={18} />
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-brand-blue font-bold uppercase tracking-wider mb-0.5">Dica Rápida</span>
            <span className="text-xs text-gray-500">
              Use o "Diagnóstico Auto." para soluções instantâneas antes de abrir um ticket.
            </span>
          </div>
        </div>
      </div>

      {/* Footer Logo - Cimental Fermaflex (Bottom Right) */}
      <div className="absolute bottom-10 right-12 z-30 opacity-90 select-none">
        <div className="flex items-center gap-3">
          {/* Logo Icon - Crescent */}
          <svg width="55" height="55" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M80 10C35 10 10 35 10 50C10 65 35 90 80 90C55 90 35 75 35 50C35 25 55 10 80 10Z" fill="white"/>
          </svg>
          
          {/* Text */}
          <div className="flex flex-col justify-center">
             <h2 className="text-4xl font-[900] text-white tracking-tight leading-[0.85]">
               Cimental
             </h2>
             <span className="text-[10px] font-bold text-white tracking-[0.36em] uppercase ml-1 mt-1">
               FERMAFLEX
             </span>
          </div>
        </div>
      </div>

    </main>
  );
};

export default function App() {
  return (
    <div className="flex h-screen w-full bg-gray-50 font-sans">
      <Sidebar />
      <MainContent />
    </div>
  );
}