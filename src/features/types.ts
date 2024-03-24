import {ReactNode } from "react";

export interface Task {
    id: string;
    content: Task["id"];
    done: ReactNode;
}

export interface TaskPageProps {
    task: Task[];
    hideDone: boolean;
    toggleDone: () => void;
    removeTask: () => void;
}
  