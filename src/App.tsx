import "./App.css";

function App() {
  return (
    <>
      <div>
        <span className="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 ...">
          Hello
          <br />
          World
        </span>
      </div>
      <div className="text-4xl font-bold text-red-300">Hello</div>
    </>
  );
}

export default App;

// import React from 'react';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import ProtectedRoute from './components/ProtectedRoute';
// import { useLoggedInState } from './utils/authState';
// import Dashboard from './components/Dashboard';

// interface Route {
//   path: string;
//   element: React.ReactElement | JSX.Element;
//   children?: Route[];
// }

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <ProtectedRoute isLoggedIn={useLoggedInState()[0]}>
//       <Layout /> {/* Optional Layout component */}
//     </ProtectedRoute>,
//     children: [
//       { path: "/", element: <Dashboard /> },
//       { path: "/user", element: <div>User List</div> }, // Placeholder for UserList
//       { path: "/company", element: <div>Company List</div> }, // Placeholder for CompanyList
//       { path: "/application", element: <div>Application List</div> }, // Placeholder for ApplicationList
//     ],
//   },
//   { path: "/login", element: <div>Login Form</div> }, // Placeholder for AuthForm
//   { path: "/register", element: <div>Register Form</div> }, // Placeholder for AuthForm
//   { path: "/logout", element: <button onClick={useLoggedInState()[1]}>Logout</button> },
// ]);

// function App() {
//   return (
//     <RouterProvider router={router} />
//   );
// }

// export default App;
