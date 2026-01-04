import { Link } from 'react-router-dom';
import { ArrowLeft, Trophy, Heart, Lightbulb, Mountain, Star, CheckCircle, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';

const Conclusion = () => {
  const keyLearnings = [
    'Kỹ năng tìm kiếm và đánh giá thông tin trên internet',
    'Hiểu biết về trí tuệ nhân tạo và ứng dụng thực tế',
    'Kỹ năng làm việc nhóm và giao tiếp trong môi trường số',
    'Khả năng sáng tạo nội dung số chất lượng',
    'Nhận thức về liêm chính học thuật và an toàn thông tin',
    'Sử dụng AI một cách có trách nhiệm và hiệu quả',
  ];

  const challenges = [
    {
      challenge: '[Khó khăn 1 - tự bổ sung]',
      solution: '[Cách bạn vượt qua - tự bổ sung]',
    },
    {
      challenge: '[Khó khăn 2 - tự bổ sung]',
      solution: '[Cách bạn vượt qua - tự bổ sung]',
    },
    {
      challenge: '[Khó khăn 3 - tự bổ sung]',
      solution: '[Cách bạn vượt qua - tự bổ sung]',
    },
  ];

  const proudMoments = [
    '[Điều tự hào 1 - tự bổ sung]',
    '[Điều tự hào 2 - tự bổ sung]',
    '[Điều tự hào 3 - tự bổ sung]',
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 hero-section relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full text-secondary-foreground text-sm mb-6">
              <Trophy className="w-4 h-4" />
              <span>Kết thúc hành trình</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Tổng kết</span> & Kết luận
            </h1>
            <p className="text-lg text-muted-foreground">
              Nhìn lại hành trình học tập, những bài học quý giá và sự trưởng thành 
              của bản thân qua môn học này.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <Card className="border-border overflow-hidden">
                <div className="h-2 gradient-bg" />
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center">
                      <Heart className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h2 className="font-display text-2xl font-bold">
                      Trải nghiệm làm Portfolio
                    </h2>
                  </div>
                  <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                    <p>
                      [Đây là nơi bạn chia sẻ trải nghiệm cá nhân khi làm Portfolio. 
                      Hãy viết về quá trình từ lúc bắt đầu cho đến khi hoàn thành.]
                    </p>
                    <p>
                      [Bạn cảm thấy như thế nào khi nhìn lại toàn bộ sản phẩm? 
                      Có gì bất ngờ hay thú vị trong quá trình thực hiện?]
                    </p>
                    <p>
                      [Phần này nên thể hiện sự chân thành và suy nghĩ sâu sắc của bạn 
                      về hành trình học tập vừa qua.]
                    </p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Key Learnings */}
      <section className="section-padding alt-section">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold mb-4">
              <Lightbulb className="inline w-8 h-8 mr-2 text-primary" />
              Kiến thức & Kỹ năng quan trọng nhất
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Những điều giá trị nhất tôi học được từ môn học này
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {keyLearnings.map((learning, index) => (
              <AnimatedSection key={index} delay={index * 0.05}>
                <Card className="h-full border-border hover:border-primary/50 transition-colors">
                  <CardContent className="p-4 flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{learning}</span>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold mb-4">
              <Mountain className="inline w-8 h-8 mr-2 text-primary" />
              Khó khăn & Cách vượt qua
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Những thách thức tôi gặp phải và bài học từ việc vượt qua chúng
            </p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto space-y-6">
            {challenges.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card className="border-border overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-2">
                      <div className="p-6 bg-destructive/5 border-r border-border">
                        <h4 className="font-semibold text-sm text-destructive mb-2">
                          Khó khăn
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          {item.challenge}
                        </p>
                      </div>
                      <div className="p-6 bg-accent/5">
                        <h4 className="font-semibold text-sm text-accent mb-2">
                          Cách vượt qua
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          {item.solution}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Proud Moments */}
      <section className="section-padding alt-section">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold mb-4">
              <Star className="inline w-8 h-8 mr-2 text-primary fill-primary" />
              Điều tự hào nhất
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Những thành tựu và khoảnh khắc tôi cảm thấy tự hào trong Portfolio này
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {proudMoments.map((moment, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card className="h-full border-border hover:border-primary/50 transition-colors text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full gradient-bg mx-auto mb-4 flex items-center justify-center">
                      <Star className="w-6 h-6 text-primary-foreground fill-primary-foreground" />
                    </div>
                    <p className="text-muted-foreground">{moment}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Final Commitment */}
      <section className="section-padding">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto">
              <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
                <CardContent className="p-8 text-center">
                  <Quote className="w-12 h-12 mx-auto text-primary mb-6" />
                  <h3 className="font-display text-2xl font-bold mb-4">
                    Cam kết liêm chính học thuật
                  </h3>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Website này được xây dựng với mục tiêu học tập nghiêm túc. 
                    Mọi nội dung do tôi tự viết và tự chịu trách nhiệm về liêm chính học thuật.
                  </p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full text-accent text-sm font-medium">
                    <CheckCircle className="w-4 h-4" />
                    <span>Đã cam kết tuân thủ</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Back to Projects */}
      <section className="section-padding alt-section">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="font-display text-2xl font-bold mb-4">
                Cảm ơn bạn đã xem Portfolio!
              </h2>
              <p className="text-muted-foreground mb-8">
                Quay lại để xem chi tiết các dự án hoặc trang giới thiệu.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/projects">
                  <Button variant="outline" size="lg">
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Xem lại Dự án
                  </Button>
                </Link>
                <Link to="/">
                  <Button size="lg" className="gradient-bg text-primary-foreground">
                    Về Trang chủ
                  </Button>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Conclusion;
