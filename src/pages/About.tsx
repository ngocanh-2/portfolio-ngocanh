import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Heart, Lightbulb, GraduationCap, Code, Palette, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';

const About = () => {
  const interests = [
    { icon: Lightbulb, label: 'Công nghệ AI' },
    { icon: Code, label: 'Ứng dụng số' },
    { icon: BookOpen, label: 'Kinh tế số' },
    { icon: Palette, label: 'Sáng tạo nội dung' },
  ];

  const learningGoals = [
    'Hoàn thành tốt các nhiệm vụ học tập',
    'Tiếp thu kiến thức để áp dụng vào cuộc sống',
    'Sử dụng AI một cách có trách nhiệm và hiệu quả',
    'Phát triển tư duy số trong lĩnh vực kinh tế',
  ];

  const portfolioGoals = [
    'Tổng hợp toàn bộ quá trình học tập',
    'Lưu trữ và trình bày sản phẩm học tập',
    'Thể hiện sự tiến bộ qua từng bài',
    'Chứng minh cam kết liêm chính học thuật',
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 hero-section relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              {/* Avatar */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="shrink-0"
              >
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full gradient-bg p-1">
                  <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                    <GraduationCap className="w-20 h-20 md:w-24 md:h-24 text-primary" />
                  </div>
                </div>
              </motion.div>

              {/* Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center md:text-left"
              >
                <Badge className="mb-4 gradient-bg text-primary-foreground border-0">
                  Sinh viên
                </Badge>
                <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
                  Trần Ngọc Anh
                </h1>
                <p className="text-xl text-muted-foreground mb-4">
                  Ngành: Kinh tế
                </p>
                <p className="text-muted-foreground max-w-lg">
                  Xin chào! Tôi là sinh viên ngành Kinh tế, đang theo học môn Nhập môn Công nghệ số 
                  và Ứng dụng Trí tuệ nhân tạo. Tôi đam mê tìm hiểu về công nghệ AI và 
                  cách ứng dụng nó vào lĩnh vực kinh tế. Portfolio này là nơi tôi chia sẻ 
                  hành trình học tập và sự tiến bộ của mình.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold mb-4">
              <Heart className="inline w-8 h-8 mr-2 text-destructive" />
              Sở thích
            </h2>
            <p className="text-muted-foreground">
              Những điều tôi yêu thích liên quan đến học tập và công nghệ
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {interests.map((interest, index) => (
              <AnimatedSection key={interest.label} delay={index * 0.1}>
                <Card className="card-hover border-border hover:border-primary/50">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-lg bg-secondary mx-auto mb-3 flex items-center justify-center">
                      <interest.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-sm font-medium">{interest.label}</span>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Goals Section */}
      <section className="section-padding alt-section">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Learning Goals */}
            <AnimatedSection direction="left">
              <Card className="h-full border-border">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center">
                      <Target className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-display text-2xl font-bold">Mục tiêu học tập</h3>
                  </div>
                  <ul className="space-y-4">
                    {learningGoals.map((goal, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full gradient-bg flex items-center justify-center text-xs text-primary-foreground shrink-0 mt-0.5">
                          {index + 1}
                        </span>
                        <span className="text-muted-foreground">{goal}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Portfolio Goals */}
            <AnimatedSection direction="right">
              <Card className="h-full border-border">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-display text-2xl font-bold">Mục tiêu Portfolio</h3>
                  </div>
                  <ul className="space-y-4">
                    {portfolioGoals.map((goal, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full gradient-bg flex items-center justify-center text-xs text-primary-foreground shrink-0 mt-0.5">
                          {index + 1}
                        </span>
                        <span className="text-muted-foreground">{goal}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Personal Statement */}
      <section className="section-padding">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto">
              <Card className="border-border overflow-hidden">
                <div className="h-2 gradient-bg" />
                <CardContent className="p-8">
                  <h3 className="font-display text-2xl font-bold mb-6 text-center">
                    Lời chia sẻ cá nhân
                  </h3>
                  <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                    <p>
                      Là một sinh viên ngành Kinh tế, tôi luôn tò mò về cách công nghệ 
                      đang thay đổi thế giới kinh doanh. Đặc biệt, trí tuệ nhân tạo 
                      đã mở ra những cơ hội hoàn toàn mới trong phân tích dữ liệu, 
                      dự báo xu hướng và tối ưu hóa quy trình.
                    </p>
                    <p>
                      Môn học Nhập môn Công nghệ số và Ứng dụng AI đã giúp tôi có cái nhìn 
                      toàn diện về vai trò của công nghệ trong cuộc sống hiện đại. 
                      Tôi học được cách sử dụng AI một cách có trách nhiệm, hiểu được 
                      tầm quan trọng của liêm chính học thuật trong thời đại số.
                    </p>
                    <p>
                      Mục tiêu của tôi là hoàn thành tốt các nhiệm vụ học tập, đồng thời 
                      tích lũy kiến thức để áp dụng vào thực tiễn. Portfolio này chính là 
                      minh chứng cho quá trình học tập nghiêm túc và sự tiến bộ của tôi.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding alt-section">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="font-display text-3xl font-bold mb-4">
                Khám phá các dự án của tôi
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Xem chi tiết 6 bài tập từ các chương trong môn học, 
                thể hiện quá trình học tập và sự tiến bộ.
              </p>
              <Link to="/projects">
                <Button size="lg" className="gradient-bg text-primary-foreground">
                  Xem dự án
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

export default About;
