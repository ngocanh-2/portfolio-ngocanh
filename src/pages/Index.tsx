import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, User, Folder, FileText, Sparkles, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';

const Index = () => {
  const features = [
    {
      icon: User,
      title: 'Giới thiệu bản thân',
      description: 'Tìm hiểu về tôi, mục tiêu học tập và định hướng phát triển kỹ năng số.',
      link: '/about',
    },
    {
      icon: Folder,
      title: '6 Dự án học tập',
      description: 'Tổng hợp các bài tập từ 6 chương, thể hiện quá trình học tập và tiến bộ.',
      link: '/projects',
    },
    {
      icon: FileText,
      title: 'Tổng kết & Phản tư',
      description: 'Chia sẻ trải nghiệm, bài học và sự trưởng thành qua môn học.',
      link: '/conclusion',
    },
  ];

  const scrollToContent = () => {
    document.getElementById('content')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen hero-section flex items-center justify-center relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 pt-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full text-secondary-foreground text-sm mb-6">
                <Sparkles className="w-4 h-4" />
                <span>Digital Portfolio 2024</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              Nhập môn{' '}
              <span className="gradient-text">Công nghệ số</span>
              <br />
              & Ứng dụng{' '}
              <span className="gradient-text">Trí tuệ nhân tạo</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            >
              Portfolio cá nhân thể hiện quá trình học tập, sự tiến bộ và cam kết 
              liêm chính học thuật trong suốt môn học.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/projects">
                <Button size="lg" className="gradient-bg text-primary-foreground hover:opacity-90 transition-opacity">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Xem các dự án
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/5">
                  <User className="w-5 h-5 mr-2" />
                  Về tôi
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          onClick={scrollToContent}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="text-sm">Khám phá thêm</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.button>
      </section>

      {/* Features Section */}
      <section id="content" className="section-padding alt-section">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Nội dung <span className="gradient-text">Portfolio</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Khám phá hành trình học tập của tôi qua các phần được tổ chức một cách logic và khoa học.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <AnimatedSection key={feature.title} delay={index * 0.1}>
                <Link to={feature.link}>
                  <Card className="h-full card-hover border-border hover:border-primary/50 group cursor-pointer">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <feature.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {feature.description}
                      </p>
                      <div className="flex items-center gap-2 text-primary mt-4 text-sm font-medium">
                        <span>Xem chi tiết</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '6', label: 'Bài tập hoàn thành' },
              { value: '6', label: 'Chương học' },
              { value: '100%', label: 'Cam kết liêm chính' },
              { value: '∞', label: 'Sự tiến bộ' },
            ].map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 0.1}>
                <div className="text-center p-6 rounded-xl bg-card border border-border">
                  <div className="font-display text-4xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding alt-section">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Sẵn sàng khám phá?
              </h2>
              <p className="text-muted-foreground mb-8">
                Hãy bắt đầu với phần giới thiệu để hiểu hơn về tôi và mục tiêu học tập của tôi.
              </p>
              <Link to="/about">
                <Button size="lg" className="gradient-bg text-primary-foreground">
                  Bắt đầu ngay
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
