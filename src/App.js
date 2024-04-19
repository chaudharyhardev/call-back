// App.js
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React from 'react';
import { ThemeProvider } from './ThemeContext';
import Page1 from './Page1';
import Page2 from './Page2';

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Page1/>} />
          <Route path="/page2"  element={<Page2/>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
// ParentComponent.jsx
// import React from 'react';
// import ChildComponent from './ChildComponent';

// function ParentComponent() {
//   // Define a callback function
//   const handleCallback = (data) => {
//     console.log(data);
//   };

//   return (
//     <div>
//       <ChildComponent callback={handleCallback} />
//     </div>
//   );
// }

// export default ParentComponent;
