import './App.css'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import EmployerLogin from "./components.js/login/EmployerLogin";
import EmployeeLogin from "./components.js/login/EmployeeLogin";
import ForgotPassword from "./components.js/initial/ForgotPassword";

import Opening from "./components.js/initial/Opening";
import Home from "./components.js/main/Home";
import Dashboard from './components.js/main/Dashboard';
import Team from './components.js/main/Team';
import Projects from './components.js/main/Projects';

import AllowedRoutes from './components.js/authRoutes/AllowedRoutes';
import UnauthorizedRoutes from './components.js/authRoutes/UnauthorizedRoutes';

import ManagerState from './context/manager/ManagerState';
import EmployerState from './context/employee/EmployeeState';
import ProjectState from './context/project/ProjectState';
import TaskState from './context/task/TaskState';

export default function App() {
  
  return (
    <>
    
    <BrowserRouter>
    {/* wrapping using context api */}
    <TaskState>
    <ProjectState>
      <ManagerState> 
        <EmployerState>
          <Routes>
            <Route exact path="/" element={<UnauthorizedRoutes><Opening/></UnauthorizedRoutes>} />
            <Route exact path="/employer-login" element={<UnauthorizedRoutes><EmployerLogin/></UnauthorizedRoutes>} />
            <Route exact path="/employee-login" element={<UnauthorizedRoutes><EmployeeLogin/></UnauthorizedRoutes>} />
            <Route exact path="/forgot-password" element={<UnauthorizedRoutes><ForgotPassword/></UnauthorizedRoutes>} />

          
              <Route exact path="/home" element={<AllowedRoutes><Home/></AllowedRoutes>} />
              <Route exact path="/team" element={<AllowedRoutes><Team/></AllowedRoutes>} />
              <Route exact path="/projects" element={<AllowedRoutes><Projects/></AllowedRoutes>} />
              <Route exact path="/dashboard" element={<AllowedRoutes><Dashboard/></AllowedRoutes>} />
            
          </Routes>
        </EmployerState>
      </ManagerState>
    </ProjectState>
    </TaskState>
    </BrowserRouter>  
</>
  );
}
