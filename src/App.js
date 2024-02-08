import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import LeaveTable from "./components/LeaveTable";
import Login from "./components/Login";
import Register from "./components/Register";
// import "./styles/font.css";
import EmployeeComponent from "./components/EmployeeComponent";
import { useSelector } from "react-redux";
// import AttendanceList from "./components/AttendanceList";
function App() {
  const isAuth = useSelector((state) => state.isAuth);
  console.log(isAuth);
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            isAuth === "false" ? (
              <Register />
            ) : (
              <Navigate to="/employee" replace />
            )
          }
        />
        {isAuth === "true" ? (
          <>
            <Route path="/employee" element={<EmployeeComponent />} />
            <Route path="/leave" element={<LeaveTable />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Register />} />
            <Route path="/signin" element={<Login />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </>
        )}
      </Routes>
      {/* <Login /> */}
      {/* <Navbars /> */}
      {/* <LeaveModel /> */}
      {/* <LeaveTable /> */}
      {/* <AttendanceList /> */}
      {/* <EmployeeComponent /> */}
      {/* <Register /> */}
    </div>
  );
}

export default App;
