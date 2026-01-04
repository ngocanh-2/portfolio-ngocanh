import { Link } from 'react-router-dom';
import { ArrowLeft, Trophy, Heart, Lightbulb, Mountain, Star, CheckCircle, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';

const Conclusion = () => {
  const keyLearnings = [
    'Kỹ năng tìm kiếm thông tin nâng cao và đánh giá nguồn tin cậy',
    'Hiểu biết toàn diện về AI và cách ứng dụng có trách nhiệm',
    'Kỹ năng làm việc nhóm và giao tiếp chuyên nghiệp trong môi trường số',
    'Khả năng sáng tạo nội dung số với Canva, CapCut và các công cụ hiện đại',
    'Nhận thức sâu sắc về liêm chính học thuật và an toàn thông tin',
    'Tư duy phản biện khi tiếp nhận thông tin trong thời đại số',
  ];

  const challenges = [
    {
      challenge: 'Ban đầu chưa quen với việc tổ chức nội dung theo cấu trúc bài bản, dẫn đến bài làm lộn xộn và thiếu logic.',
      solution: 'Tôi học cách lập dàn ý trước khi viết, sử dụng Notion để tổ chức ý tưởng và tham khảo các mẫu Portfolio chất lượng để cải thiện cấu trúc.',
    },
    {
      challenge: 'Khó phân biệt giữa việc sử dụng AI hợp lý và đạo văn, lo lắng về ranh giới liêm chính học thuật.',
      solution: 'Tìm hiểu kỹ quy định của trường, luôn ghi rõ AI hỗ trợ ở khâu nào, và quan trọng nhất là đọc hiểu rồi viết lại bằng ngôn ngữ của mình thay vì sao chép.',
    },
    {
      challenge: 'Quản lý thời gian kém, để dồn nhiều bài tập đến gần deadline gây áp lực lớn.',
      solution: 'Sử dụng Trello để theo dõi tiến độ, chia nhỏ công việc thành từng bước cụ thể, và đặt deadline cá nhân sớm hơn deadline thực tế 2-3 ngày.',
    },
  ];

  const proudMoments = [
    'Hoàn thành Portfolio đầy đủ với 6 bài tập được trình bày chuyên nghiệp, có cấu trúc rõ ràng và nội dung chất lượng.',
    'Thực sự hiểu và áp dụng được AI một cách có trách nhiệm, biến nó thành công cụ hỗ trợ học tập hiệu quả thay vì lệ thuộc.',
    'Phát triển tư duy phản biện và thói quen kiểm chứng thông tin - kỹ năng quý giá cho cả cuộc sống và sự nghiệp tương lai.',
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
                      Khi bắt đầu môn học Nhập môn Công nghệ số và Ứng dụng AI, tôi không nghĩ mình 
                      sẽ học được nhiều đến vậy. Là sinh viên ngành Kinh tế, ban đầu tôi cho rằng 
                      công nghệ số chỉ là "biết dùng máy tính" - nhưng thực tế đã chứng minh suy nghĩ 
                      đó hoàn toàn sai lầm.
                    </p>
                    <p>
                      Quá trình làm Portfolio này giúp tôi nhìn lại toàn bộ hành trình học tập. Từ 
                      việc hiểu cấu tạo máy tính, đến cách tìm kiếm thông tin hiệu quả, rồi học cách 
                      sử dụng AI có trách nhiệm - mỗi chương đều mang lại những bài học quý giá. 
                      Đặc biệt, phần về liêm chính học thuật đã thay đổi cách tôi nhìn nhận về việc học.
                    </p>
                    <p>
                      Điều bất ngờ nhất với tôi là nhận ra rằng kỹ năng số không chỉ dành cho dân 
                      công nghệ. Trong thời đại AI, sinh viên kinh tế như tôi càng cần hiểu về công 
                      nghệ để thích ứng với thị trường lao động đang thay đổi. Portfolio này không 
                      chỉ là bài tập - đây là minh chứng cho sự trưởng thành của tôi trong tư duy số.
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
