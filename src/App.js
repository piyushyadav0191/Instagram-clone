import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FeedPage from "./pages/feed";
import ExplorePage from "./pages/explore";
import ProfilePage from "./pages/profile";
import PostPage from "./pages/post";
import EditProfilePage from "./pages/edit-profile";
import LoginPage from "./pages/login";
import SignUpPage from "./pages/signup";
import NotFoundPage from "./pages/not-found";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<FeedPage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route exact path="/:username" element={<ProfilePage />} />
        <Route exact path="/p/postId" element={<PostPage />} />
        <Route path="/account/edit" element={<EditProfilePage />} />
        <Route path="/account/login" element={<LoginPage />} />
        <Route path="/account/emailsignup" element={<SignUpPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
