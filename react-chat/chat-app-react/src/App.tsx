// import React from 'react';
// import { Outlet, Route, Routes } from 'react-router-dom';
// import { AuthenticationPage } from './pages/AuthenticationPage';

// function App() {
//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<div>hi</div>}></Route>
//         <Route
//         path="conversations"
//         element={
//           <div>
//             <div>Conversations</div>
//             <Outlet />
//           </div>
//         }
//         >
//         <Route path=":id" element={<div>Conversation ID Page</div>} />
//         </Route>
        
//       </Routes>
//     </> 
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { AuthenticationPage } from './pages/AuthenticationPage';
import { ConversationPage } from './pages/ConversationPage';
import { ConversationChannelPage } from './pages/ConversationChannelPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
         {/* <Route path="/" element={<ConversationPage />}></Route> */}
        <Route path="conversations" element={<ConversationPage />}>
        <Route path=":id" element={< ConversationChannelPage />} />
        </Route> 
      </Routes>
    </BrowserRouter>
  );
}


export default App;