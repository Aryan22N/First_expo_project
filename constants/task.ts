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
]
