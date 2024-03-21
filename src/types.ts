import { ReactElement, ReactNode } from "react";

export interface Task {
    id: string;
    content: ReactNode;
    done: ReactNode;
}

export interface TaskPageProps {
    task: Task[];
    hideDone: boolean;
    toggleDone: () => void;
    removeTask: () => void;
}
  