import { Mail, Linkedin, Github } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-700 to-purple-700 text-white py-16 text-center shadow-lg">
      <h1 className="text-5xl font-extrabold tracking-tight">Mansi Matekar</h1>
      <p className="text-xl mt-3">Azure Data Engineer</p>
      <div className="flex justify-center gap-6 mt-6">
        <a href="mailto:yourmail@example.com" className="hover:scale-110 transition"><Mail /></a>
        <a href="https://linkedin.com/in/yourprofile" className="hover:scale-110 transition"><Linkedin /></a>
        <a href="https://github.com/yourgithub" className="hover:scale-110 transition"><Github /></a>
      </div>
    </header>
  );
}