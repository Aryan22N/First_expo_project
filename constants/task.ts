export type TaskStatus='Done'|'In Progress'|'To-do'

export type TaskIcon = {
  name: string;
  backgroundColor: string;
};


export type Task ={
    id: string;
    category: string;
    title: string;
    time: string;
    status: TaskStatus;
    icon: TaskIcon;

}

export const TASKS: Task[] = [
  {
    id: '1',
    category: 'Grocery shopping app design',
    title: 'Market Research',
    time: '10:00 AM',
    status: 'Done',
    icon: { name: 'grid', backgroundColor: '#FF6B8A' },
  },
  {
    id: '2',
    category: 'Grocery shopping app design',
    title: 'Competitive Analysis',
    time: '12:00 PM',
    status: 'In Progress',
    icon: { name: 'grid', backgroundColor: '#FF6B8A' },
  },
  {
    id: '3',
    category: 'Uber Eats redesign challenge',
    title: 'Create Low-fidelity Wireframe',
    time: '07:00 PM',
    status: 'To-do',
    icon: { name: 'arrow-down-circle', backgroundColor: '#4ADE80' },
  },
  {
    id: '4',
    category: 'Uber Eats redesign challenge',
    title: 'User Flow Mapping',
    time: '09:00 AM',
    status: 'Done',
    icon: { name: 'git-branch', backgroundColor: '#4ADE80' },
  },
  {
    id: '5',
    category: 'Uber Eats redesign challenge',
    title: 'High-fidelity Prototype',
    time: '02:00 PM',
    status: 'In Progress',
    icon: { name: 'color-palette', backgroundColor: '#A78BFA' },
  },
  {
    id: '6',
    category: 'Finance tracker app',
    title: 'Define Data Models',
    time: '11:00 AM',
    status: 'Done',
    icon: { name: 'bar-chart', backgroundColor: '#38BDF8' },
  },
  {
    id: '7',
    category: 'Finance tracker app',
    title: 'Design Dashboard Screen',
    time: '03:00 PM',
    status: 'In Progress',
    icon: { name: 'pie-chart', backgroundColor: '#38BDF8' },
  },
  {
    id: '8',
    category: 'Finance tracker app',
    title: 'Integrate Charts Library',
    time: '05:00 PM',
    status: 'To-do',
    icon: { name: 'analytics', backgroundColor: '#FBBF24' },
  },
  {
    id: '9',
    category: 'Portfolio website redesign',
    title: 'Gather Inspiration & Moodboard',
    time: '08:30 AM',
    status: 'Done',
    icon: { name: 'images', backgroundColor: '#F97316' },
  },
  {
    id: '10',
    category: 'Portfolio website redesign',
    title: 'Build Responsive Layout',
    time: '04:00 PM',
    status: 'To-do',
    icon: { name: 'browsers', backgroundColor: '#F97316' },
  },
]

export const FILTER_OPTIONS=['ALL','TO-DO' , 'IN PROGRESS','COMPLITED'] as const

export type FilterOption = (typeof FILTER_OPTIONS)[number]