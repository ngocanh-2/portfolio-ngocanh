import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Lightbulb, TrendingUp, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import ProjectCard from '@/components/ProjectCard';

const projectsData = [
  {
    id: 'project-1',
    chapter: 'Chương 1',
    title: 'Máy tính và thiết bị ngoại vi',
    summary: 'Tìm hiểu về các thành phần cơ bản của máy tính, cách hoạt động của phần cứng và phần mềm, cũng như vai trò của thiết bị ngoại vi trong hệ thống máy tính.',
    objectives: [
      'Hiểu được cấu tạo và chức năng của các thành phần máy tính',
      'Phân biệt được phần cứng và phần mềm',
      'Nhận biết và sử dụng hiệu quả các thiết bị ngoại vi',
    ],
    process: {
      steps: [
        'Nghiên cứu tài liệu về cấu trúc máy tính',
        'Thực hành nhận diện các thành phần phần cứng',
        'Tìm hiểu về các loại thiết bị ngoại vi phổ biến',
        'Hoàn thành bài tập và tổng hợp kiến thức',
      ],
      tools: ['Google Docs', 'Google Search', 'ChatGPT', 'Canva'],
    },
    evidence: {
      screenshots: [],
      links: [],
    },
    analysis: {
      strengths: ['[Phần bạn làm tốt - tự bổ sung]'],
      improvements: ['[Phần cần cải thiện - tự bổ sung]'],
      lessons: ['[Bài học rút ra - tự bổ sung]'],
    },
    aiUsage: {
      usedFor: ['Gợi ý ý tưởng ban đầu', 'Giải thích thuật ngữ kỹ thuật', 'Kiểm tra ngữ pháp'],
      commitment: 'Tôi đã kiểm tra, chọn lọc và viết lại bằng ngôn ngữ của mình. Không sao chép nguyên văn từ AI.',
    },
  },
  {
    id: 'project-2',
    chapter: 'Chương 2',
    title: 'Khai thác dữ liệu và thông tin',
    summary: 'Học cách tìm kiếm, đánh giá và sử dụng thông tin hiệu quả trên internet, phân biệt nguồn tin cậy và xây dựng kỹ năng nghiên cứu số.',
    objectives: [
      'Phát triển kỹ năng tìm kiếm thông tin hiệu quả',
      'Đánh giá độ tin cậy của nguồn thông tin',
      'Tổng hợp và trình bày thông tin một cách khoa học',
    ],
    process: {
      steps: [
        'Học các kỹ thuật tìm kiếm nâng cao trên Google',
        'Thực hành đánh giá nguồn thông tin',
        'Tổng hợp dữ liệu từ nhiều nguồn',
        'Trình bày kết quả nghiên cứu',
      ],
      tools: ['Google Search', 'Google Scholar', 'Notion', 'ChatGPT'],
    },
    evidence: {
      screenshots: [],
      links: [],
    },
    analysis: {
      strengths: ['[Phần bạn làm tốt - tự bổ sung]'],
      improvements: ['[Phần cần cải thiện - tự bổ sung]'],
      lessons: ['[Bài học rút ra - tự bổ sung]'],
    },
    aiUsage: {
      usedFor: ['Hỗ trợ tìm kiếm từ khóa', 'Tóm tắt nội dung dài', 'Gợi ý cấu trúc trình bày'],
      commitment: 'Tôi đã kiểm tra, chọn lọc và viết lại bằng ngôn ngữ của mình. Không sao chép nguyên văn từ AI.',
    },
  },
  {
    id: 'project-3',
    chapter: 'Chương 3',
    title: 'Tổng quan về trí tuệ nhân tạo',
    summary: 'Khám phá các khái niệm cơ bản về AI, ứng dụng thực tế, và tác động của trí tuệ nhân tạo đến cuộc sống và công việc.',
    objectives: [
      'Hiểu được khái niệm và lịch sử phát triển của AI',
      'Nhận biết các ứng dụng AI trong cuộc sống',
      'Phân tích cơ hội và thách thức của AI',
    ],
    process: {
      steps: [
        'Nghiên cứu lịch sử và khái niệm AI',
        'Tìm hiểu các loại AI và ứng dụng',
        'Thực hành sử dụng công cụ AI',
        'Phân tích tác động của AI',
      ],
      tools: ['ChatGPT', 'Google Bard', 'Canva AI', 'Notion AI'],
    },
    evidence: {
      screenshots: [],
      links: [],
    },
    analysis: {
      strengths: ['[Phần bạn làm tốt - tự bổ sung]'],
      improvements: ['[Phần cần cải thiện - tự bổ sung]'],
      lessons: ['[Bài học rút ra - tự bổ sung]'],
    },
    aiUsage: {
      usedFor: ['Thử nghiệm trực tiếp các công cụ AI', 'Tìm hiểu cách AI hoạt động', 'So sánh các công cụ AI khác nhau'],
      commitment: 'Tôi đã kiểm tra, chọn lọc và viết lại bằng ngôn ngữ của mình. Không sao chép nguyên văn từ AI.',
    },
  },
  {
    id: 'project-4',
    chapter: 'Chương 4',
    title: 'Giao tiếp và hợp tác trong môi trường số',
    summary: 'Phát triển kỹ năng làm việc nhóm trực tuyến, sử dụng các công cụ cộng tác số và giao tiếp hiệu quả trong môi trường ảo.',
    objectives: [
      'Sử dụng thành thạo các công cụ cộng tác trực tuyến',
      'Phát triển kỹ năng giao tiếp số chuyên nghiệp',
      'Làm việc nhóm hiệu quả trong môi trường ảo',
    ],
    process: {
      steps: [
        'Tìm hiểu các công cụ cộng tác phổ biến',
        'Thực hành làm việc nhóm trực tuyến',
        'Áp dụng nguyên tắc giao tiếp số',
        'Đánh giá hiệu quả hợp tác',
      ],
      tools: ['Google Drive', 'Trello', 'Slack', 'Zoom', 'Notion'],
    },
    evidence: {
      screenshots: [],
      links: [],
    },
    analysis: {
      strengths: ['[Phần bạn làm tốt - tự bổ sung]'],
      improvements: ['[Phần cần cải thiện - tự bổ sung]'],
      lessons: ['[Bài học rút ra - tự bổ sung]'],
    },
    aiUsage: {
      usedFor: ['Gợi ý cách tổ chức công việc nhóm', 'Soạn thảo email/tin nhắn chuyên nghiệp', 'Tóm tắt cuộc họp'],
      commitment: 'Tôi đã kiểm tra, chọn lọc và viết lại bằng ngôn ngữ của mình. Không sao chép nguyên văn từ AI.',
    },
  },
  {
    id: 'project-5',
    chapter: 'Chương 5',
    title: 'Sáng tạo nội dung số',
    summary: 'Học cách tạo ra các sản phẩm nội dung số chất lượng bao gồm văn bản, hình ảnh, video và các định dạng đa phương tiện khác.',
    objectives: [
      'Sử dụng các công cụ sáng tạo nội dung số',
      'Tạo ra sản phẩm đa phương tiện chất lượng',
      'Áp dụng nguyên tắc thiết kế cơ bản',
    ],
    process: {
      steps: [
        'Học các nguyên tắc thiết kế cơ bản',
        'Thực hành với các công cụ thiết kế',
        'Tạo sản phẩm nội dung số',
        'Nhận phản hồi và cải thiện',
      ],
      tools: ['Canva', 'CapCut', 'Adobe Express', 'Figma', 'ChatGPT'],
    },
    evidence: {
      screenshots: [],
      links: [],
    },
    analysis: {
      strengths: ['[Phần bạn làm tốt - tự bổ sung]'],
      improvements: ['[Phần cần cải thiện - tự bổ sung]'],
      lessons: ['[Bài học rút ra - tự bổ sung]'],
    },
    aiUsage: {
      usedFor: ['Gợi ý ý tưởng sáng tạo', 'Tạo hình ảnh với AI', 'Chỉnh sửa và cải thiện nội dung'],
      commitment: 'Tôi đã kiểm tra, chọn lọc và viết lại bằng ngôn ngữ của mình. Không sao chép nguyên văn từ AI.',
    },
  },
  {
    id: 'project-6',
    chapter: 'Chương 6',
    title: 'An toàn và liêm chính học thuật',
    summary: 'Hiểu về an toàn thông tin, bảo vệ dữ liệu cá nhân, và đặc biệt là tầm quan trọng của liêm chính học thuật trong thời đại số.',
    objectives: [
      'Nhận thức về an toàn thông tin và bảo mật',
      'Hiểu và thực hành liêm chính học thuật',
      'Sử dụng AI có trách nhiệm và đạo đức',
    ],
    process: {
      steps: [
        'Tìm hiểu về các mối đe dọa an ninh mạng',
        'Học cách bảo vệ thông tin cá nhân',
        'Nghiên cứu về liêm chính học thuật',
        'Xây dựng cam kết sử dụng AI có trách nhiệm',
      ],
      tools: ['Google Search', 'Notion', 'ChatGPT', 'Turnitin'],
    },
    evidence: {
      screenshots: [],
      links: [],
    },
    analysis: {
      strengths: ['[Phần bạn làm tốt - tự bổ sung]'],
      improvements: ['[Phần cần cải thiện - tự bổ sung]'],
      lessons: ['[Bài học rút ra - tự bổ sung]'],
    },
    aiUsage: {
      usedFor: ['Tìm hiểu về quy định liêm chính', 'Hỗ trợ phân tích tình huống', 'Gợi ý cách trích dẫn đúng'],
      commitment: 'Tôi đã kiểm tra, chọn lọc và viết lại bằng ngôn ngữ của mình. Không sao chép nguyên văn từ AI.',
    },
  },
];

const Projects = () => {
  const reflectionPoints = [
    {
      icon: TrendingUp,
      title: 'Thay đổi trong cách học',
      content: '[Mô tả những thay đổi lớn nhất trong cách học của bạn sau khi hoàn thành môn học này]',
    },
    {
      icon: Lightbulb,
      title: 'Kỹ năng số tiến bộ nhất',
      content: '[Nêu kỹ năng số mà bạn cảm thấy tiến bộ rõ rệt nhất và giải thích tại sao]',
    },
    {
      icon: Brain,
      title: 'Bài học về sử dụng AI',
      content: '[Chia sẻ điều bạn học được khi sử dụng AI đúng cách và có trách nhiệm]',
    },
    {
      icon: Shield,
      title: 'Nhận thức về liêm chính học thuật',
      content: '[Trình bày nhận thức của bạn về trách nhiệm học thuật và cam kết của bạn]',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 hero-section relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Các <span className="gradient-text">Dự án</span> học tập
            </h1>
            <p className="text-lg text-muted-foreground">
              Tổng hợp 6 bài tập từ các chương trong môn học, mỗi bài được trình bày 
              chi tiết với mục tiêu, quy trình, minh chứng và phân tích.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid gap-6 max-w-4xl mx-auto">
            {projectsData.map((project, index) => (
              <ProjectCard key={project.id} {...project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Reflection Section */}
      <section className="section-padding alt-section">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              🧠 Phản tư <span className="gradient-text">xuyên suốt</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Nhìn lại hành trình học tập và những thay đổi trong tư duy của tôi
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {reflectionPoints.map((point, index) => (
              <AnimatedSection key={point.title} delay={index * 0.1}>
                <Card className="h-full border-border hover:border-primary/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center shrink-0">
                        <point.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-lg mb-2">
                          {point.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {point.content}
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

      {/* CTA */}
      <section className="section-padding">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="font-display text-3xl font-bold mb-4">
                Tiếp tục đến phần Tổng kết
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Đọc những chia sẻ cuối cùng về trải nghiệm làm Portfolio 
                và bài học quý giá từ môn học.
              </p>
              <Link to="/conclusion">
                <Button size="lg" className="gradient-bg text-primary-foreground">
                  Xem Tổng kết
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

export default Projects;
