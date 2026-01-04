import { GraduationCap, Heart, Mail, Github, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-xl gradient-text">
                Portfolio
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              Digital Portfolio cá nhân - Môn học Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-foreground">Điều hướng</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Trang chủ
              </Link>
              <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Giới thiệu
              </Link>
              <Link to="/projects" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Dự án
              </Link>
              <Link to="/conclusion" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Tổng kết
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-foreground">
          </h4>
            <div className="flex flex-col gap-2">
              <a href="mailto:email@example.com" className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2">
              <Mail className="w-4 h-4" />
                email@example.com
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2"><Github className="w-4 h-4" />
                GitHub
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2">
              <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-1">
            Được tạo với <Heart className="w-4 h-4 text-destructive fill-destructive" /> bởi sinh viên
          </p>
          <p className="text-muted-foreground text-xs mt-2">© 2026 Digital Portfolio. Cam kết liêm chính học thuật.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;