import FormsFirebase from "./page/FormsFirebase";

import './App.css'
import { AuthProvider } from './context/authContext'

function App() {
  return (
    <div>
    <AuthProvider>
        <h1>Oauth & Google</h1>
        <FormsFirebase />
    </AuthProvider>
    </div>
  );
}

export default App;
