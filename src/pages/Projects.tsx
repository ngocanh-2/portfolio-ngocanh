import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Lightbulb, TrendingUp, Shield } from 'lucide-react';
import chapter1Folder1 from '@/assets/chapter1-folder1.png';
import chapter1Folder2 from '@/assets/chapter1-folder2.png';
import chapter1Folder3 from '@/assets/chapter1-folder3.png';
import chapter2Search1 from '@/assets/chapter2-search1.png';
import chapter2Search2 from '@/assets/chapter2-search2.png';
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
    summary: 'Bài tập này giúp tôi hiểu rõ cấu tạo máy tính, phân biệt phần cứng - phần mềm, và biết cách sử dụng các thiết bị ngoại vi hiệu quả trong học tập và công việc.',
    objectives: [
      'Hiểu được cấu tạo và chức năng của CPU, RAM, ổ cứng, mainboard',
      'Phân biệt rõ ràng giữa phần cứng (hardware) và phần mềm (software)',
      'Nhận biết và sử dụng hiệu quả các thiết bị ngoại vi như chuột, bàn phím, máy in, webcam',
      'Áp dụng kiến thức để chọn lựa và bảo trì thiết bị phù hợp nhu cầu học tập',
    ],
    process: {
      steps: [
        'Đọc tài liệu bài giảng và nghiên cứu thêm về cấu trúc máy tính từ các nguồn uy tín',
        'Thực hành nhận diện các thành phần phần cứng trên máy tính cá nhân',
        'Tìm hiểu về các loại thiết bị ngoại vi phổ biến và công dụng của từng loại',
        'Tạo sơ đồ tư duy tổng hợp kiến thức về hệ thống máy tính',
        'Hoàn thành bài tập và trình bày kết quả',
      ],
      tools: ['Google Docs - Soạn thảo nội dung', 'Google Search - Tra cứu thông tin', 'ChatGPT - Giải thích thuật ngữ kỹ thuật', 'Canva - Thiết kế sơ đồ tư duy'],
    },
    evidence: {
      screenshots: [
        { src: chapter1Folder1, caption: 'Thư mục Documents lưu trữ các tài liệu học tập' },
        { src: chapter1Folder2, caption: 'Thư mục BÀI TẬP CNS được tổ chức gọn gàng' },
        { src: chapter1Folder3, caption: 'Thư mục bài tập tính điểm cuối kỳ với các file hoàn thành' }
      ],
      links: ['Link Google Docs bài viết', 'Link Canva sơ đồ tư duy'],
    },
    analysis: {
      strengths: [
        'Hiểu rõ và phân biệt được các thành phần chính của máy tính',
        'Biết cách tra cứu thông tin kỹ thuật từ nhiều nguồn khác nhau',
        'Trình bày nội dung có hệ thống với sơ đồ tư duy trực quan',
      ],
      improvements: [
        'Cần tìm hiểu sâu hơn về cách các thành phần tương tác với nhau',
        'Nên thực hành nhiều hơn với việc lắp ráp và bảo trì phần cứng',
      ],
      lessons: [
        'Hiểu về máy tính giúp tôi sử dụng thiết bị hiệu quả hơn trong học tập',
        'Kiến thức phần cứng là nền tảng để hiểu các công nghệ phức tạp hơn',
        'Việc bảo trì đúng cách giúp kéo dài tuổi thọ thiết bị',
      ],
    },
    aiUsage: {
      usedFor: ['Giải thích các thuật ngữ kỹ thuật phức tạp như CPU, GPU, SSD', 'Gợi ý cấu trúc trình bày bài viết', 'Kiểm tra lỗi chính tả và ngữ pháp'],
      commitment: 'Tôi đã sử dụng AI như một công cụ hỗ trợ, không sao chép nguyên văn. Mọi nội dung đều được tôi đọc hiểu, chọn lọc và viết lại bằng ngôn ngữ của mình.',
    },
  },
  {
    id: 'project-2',
    chapter: 'Chương 2',
    title: 'Khai thác dữ liệu và thông tin',
    summary: 'Bài tập giúp tôi rèn luyện kỹ năng tìm kiếm thông tin hiệu quả, đánh giá độ tin cậy của nguồn, và tổng hợp dữ liệu một cách khoa học để phục vụ học tập và nghiên cứu.',
    objectives: [
      'Thành thạo các kỹ thuật tìm kiếm nâng cao trên Google (site:, filetype:, "từ khóa chính xác")',
      'Đánh giá được độ tin cậy của nguồn thông tin dựa trên các tiêu chí CRAAP',
      'Tổng hợp và trình bày thông tin từ nhiều nguồn một cách logic và khoa học',
      'Phát triển tư duy phản biện khi tiếp nhận thông tin trên internet',
    ],
    process: {
      steps: [
        'Học và thực hành các kỹ thuật tìm kiếm nâng cao trên Google',
        'Tìm hiểu về tiêu chí đánh giá nguồn tin: Độ tin cậy, Tác giả, Thời gian, Mục đích',
        'Thực hành tìm kiếm một chủ đề cụ thể và so sánh các nguồn',
        'Tổng hợp dữ liệu và tạo báo cáo nghiên cứu mini',
        'Trình bày kết quả với trích dẫn nguồn đầy đủ',
      ],
      tools: ['Google Search - Tìm kiếm nâng cao', 'Google Scholar - Tìm tài liệu học thuật', 'Notion - Tổ chức và quản lý thông tin', 'ChatGPT - Hỗ trợ tóm tắt nội dung dài'],
    },
    evidence: {
      screenshots: [
        { src: chapter2Search1, caption: 'Tìm kiếm bằng tiếng Việt về tác động mạng xã hội đến sinh viên' },
        { src: chapter2Search2, caption: 'Sử dụng site:edu để tìm nguồn học thuật uy tín' }
      ],
      links: ['Link Notion bài tổng hợp', 'Link báo cáo nghiên cứu'],
    },
    analysis: {
      strengths: [
        'Biết sử dụng toán tử tìm kiếm nâng cao để có kết quả chính xác hơn',
        'Có thể phân biệt nguồn tin cậy và nguồn không đáng tin',
        'Trình bày thông tin có cấu trúc rõ ràng với trích dẫn đầy đủ',
      ],
      improvements: [
        'Cần rèn luyện thêm việc tìm kiếm tài liệu học thuật bằng tiếng Anh',
        'Nên đa dạng hóa nguồn thông tin, không chỉ dựa vào Google',
      ],
      lessons: [
        'Không phải mọi thông tin trên internet đều đáng tin cậy',
        'Kỹ năng tìm kiếm hiệu quả giúp tiết kiệm rất nhiều thời gian học tập',
        'Luôn cần kiểm chứng thông tin từ nhiều nguồn trước khi sử dụng',
      ],
    },
    aiUsage: {
      usedFor: ['Hỗ trợ tìm từ khóa phù hợp cho chủ đề nghiên cứu', 'Tóm tắt các bài viết dài để tiết kiệm thời gian đọc', 'Gợi ý cấu trúc báo cáo nghiên cứu'],
      commitment: 'Tôi đã kiểm tra kỹ mọi thông tin AI cung cấp, đối chiếu với nguồn gốc và viết lại theo cách hiểu của mình. Không sao chép nguyên văn.',
    },
  },
  {
    id: 'project-3',
    chapter: 'Chương 3',
    title: 'Tổng quan về trí tuệ nhân tạo',
    summary: 'Bài tập giúp tôi hiểu về lịch sử, khái niệm cơ bản của AI, các ứng dụng thực tế trong cuộc sống, và đặc biệt là cách sử dụng AI một cách có trách nhiệm trong học tập.',
    objectives: [
      'Hiểu được lịch sử phát triển và các khái niệm cốt lõi của trí tuệ nhân tạo',
      'Phân biệt được các loại AI: AI hẹp (Narrow AI), AI tổng quát (AGI), Siêu AI',
      'Nhận biết các ứng dụng AI phổ biến trong cuộc sống hàng ngày',
      'Đánh giá được cơ hội và thách thức của AI đối với xã hội và ngành kinh tế',
    ],
    process: {
      steps: [
        'Nghiên cứu lịch sử AI từ Alan Turing đến các mô hình ngôn ngữ lớn hiện nay',
        'Tìm hiểu các khái niệm: Machine Learning, Deep Learning, Neural Networks',
        'Thử nghiệm trực tiếp các công cụ AI phổ biến (ChatGPT, DALL-E, Midjourney)',
        'Phân tích tác động của AI đến ngành kinh tế và công việc trong tương lai',
        'Viết bài phân tích về cơ hội và thách thức của AI',
      ],
      tools: ['ChatGPT - Thử nghiệm AI đàm thoại', 'Google Bard - So sánh các AI khác nhau', 'Canva AI - Thử nghiệm AI thiết kế', 'Notion AI - Hỗ trợ tổ chức nội dung'],
    },
    evidence: {
      screenshots: ['Ảnh kết quả thử nghiệm ChatGPT', 'Ảnh so sánh các công cụ AI'],
      links: ['Link bài phân tích về AI', 'Link video thuyết trình'],
    },
    analysis: {
      strengths: [
        'Hiểu rõ các khái niệm cơ bản và có thể giải thích cho người khác',
        'Biết cách sử dụng nhiều công cụ AI khác nhau phục vụ học tập',
        'Có cái nhìn cân bằng về lợi ích và rủi ro của AI',
      ],
      improvements: [
        'Cần tìm hiểu sâu hơn về các thuật toán đằng sau AI',
        'Nên cập nhật liên tục vì AI phát triển rất nhanh',
      ],
      lessons: [
        'AI là công cụ mạnh mẽ nhưng cần sử dụng có trách nhiệm',
        'Hiểu về AI giúp tôi không sợ hãi mà biết cách tận dụng nó',
        'Sinh viên kinh tế cần hiểu AI để thích ứng với thị trường lao động tương lai',
      ],
    },
    aiUsage: {
      usedFor: ['Thử nghiệm trực tiếp để hiểu cách AI hoạt động', 'Tìm hiểu về lịch sử và khái niệm AI', 'So sánh ưu nhược điểm của các công cụ AI khác nhau'],
      commitment: 'Bài tập này yêu cầu thử nghiệm AI, nhưng mọi phân tích và nhận xét đều là suy nghĩ của tôi. Tôi không sao chép câu trả lời của AI.',
    },
  },
  {
    id: 'project-4',
    chapter: 'Chương 4',
    title: 'Giao tiếp và hợp tác trong môi trường số',
    summary: 'Bài tập giúp tôi phát triển kỹ năng làm việc nhóm trực tuyến, sử dụng các công cụ cộng tác số chuyên nghiệp, và giao tiếp hiệu quả trong môi trường ảo.',
    objectives: [
      'Sử dụng thành thạo các công cụ cộng tác trực tuyến như Google Drive, Trello, Notion',
      'Phát triển kỹ năng giao tiếp số chuyên nghiệp qua email, chat, video call',
      'Làm việc nhóm hiệu quả với thành viên ở nhiều địa điểm khác nhau',
      'Quản lý thời gian và nhiệm vụ trong dự án nhóm trực tuyến',
    ],
    process: {
      steps: [
        'Tìm hiểu và thiết lập các công cụ cộng tác: Google Drive, Trello, Slack',
        'Thực hành chia sẻ tài liệu và làm việc đồng thời trên Google Docs',
        'Tham gia họp nhóm trực tuyến qua Zoom/Google Meet',
        'Phân công nhiệm vụ và theo dõi tiến độ bằng Trello',
        'Đánh giá hiệu quả hợp tác và rút kinh nghiệm',
      ],
      tools: ['Google Drive - Lưu trữ và chia sẻ tài liệu', 'Trello - Quản lý dự án', 'Slack/Zalo - Giao tiếp nhóm', 'Zoom - Họp trực tuyến', 'Notion - Ghi chú và tổng hợp'],
    },
    evidence: {
      screenshots: ['Ảnh giao diện Trello dự án nhóm', 'Ảnh cuộc họp nhóm online'],
      links: ['Link thư mục Google Drive nhóm', 'Link bảng Trello dự án'],
    },
    analysis: {
      strengths: [
        'Biết cách sử dụng nhiều công cụ cộng tác và chọn công cụ phù hợp',
        'Giao tiếp rõ ràng, chuyên nghiệp qua các kênh số',
        'Quản lý thời gian tốt hơn nhờ có bảng theo dõi nhiệm vụ',
      ],
      improvements: [
        'Cần cải thiện kỹ năng điều phối cuộc họp trực tuyến',
        'Nên chủ động hơn trong việc cập nhật tiến độ cho nhóm',
      ],
      lessons: [
        'Làm việc nhóm online đòi hỏi kỷ luật và giao tiếp rõ ràng hơn offline',
        'Công cụ tốt chỉ hiệu quả khi mọi người đều biết cách sử dụng',
        'Ghi chép và tổng hợp sau mỗi cuộc họp rất quan trọng',
      ],
    },
    aiUsage: {
      usedFor: ['Gợi ý cách tổ chức công việc nhóm hiệu quả', 'Soạn thảo email và tin nhắn chuyên nghiệp', 'Tóm tắt nội dung cuộc họp'],
      commitment: 'AI chỉ hỗ trợ về mặt hình thức giao tiếp. Nội dung công việc và quyết định đều do nhóm thảo luận và thống nhất.',
    },
  },
  {
    id: 'project-5',
    chapter: 'Chương 5',
    title: 'Sáng tạo nội dung số',
    summary: 'Bài tập giúp tôi học cách tạo ra các sản phẩm nội dung số chất lượng bao gồm đồ họa, video, và các định dạng đa phương tiện khác phục vụ học tập và truyền thông.',
    objectives: [
      'Sử dụng thành thạo các công cụ thiết kế như Canva, CapCut',
      'Áp dụng các nguyên tắc thiết kế cơ bản: màu sắc, typography, bố cục',
      'Tạo ra các sản phẩm đa phương tiện phục vụ học tập và thuyết trình',
      'Hiểu về bản quyền và sử dụng tài nguyên số có trách nhiệm',
    ],
    process: {
      steps: [
        'Học các nguyên tắc thiết kế cơ bản qua video hướng dẫn và bài viết',
        'Thực hành tạo poster, infographic bằng Canva',
        'Học cách chỉnh sửa video cơ bản với CapCut',
        'Tạo sản phẩm hoàn chỉnh: poster giới thiệu hoặc video ngắn',
        'Nhận phản hồi từ bạn bè, giảng viên và cải thiện sản phẩm',
      ],
      tools: ['Canva - Thiết kế đồ họa', 'CapCut - Chỉnh sửa video', 'Adobe Express - Tạo nội dung nhanh', 'Figma - Thiết kế giao diện', 'ChatGPT - Gợi ý ý tưởng sáng tạo'],
    },
    evidence: {
      screenshots: ['Ảnh poster thiết kế', 'Ảnh giao diện làm việc Canva'],
      links: ['Link poster Canva', 'Link video CapCut'],
    },
    analysis: {
      strengths: [
        'Tạo được sản phẩm thiết kế đẹp mắt và chuyên nghiệp hơn trước',
        'Hiểu và áp dụng được các nguyên tắc phối màu, typography',
        'Biết cách sử dụng AI hỗ trợ sáng tạo mà vẫn giữ được cá tính riêng',
      ],
      improvements: [
        'Cần rèn luyện thêm kỹ năng chỉnh sửa video nâng cao',
        'Nên tìm hiểu thêm về motion graphics và animation',
      ],
      lessons: [
        'Thiết kế tốt không cần phức tạp, quan trọng là rõ ràng và nhất quán',
        'AI có thể hỗ trợ sáng tạo nhưng ý tưởng gốc vẫn cần từ con người',
        'Kỹ năng sáng tạo nội dung số rất hữu ích cho mọi ngành nghề',
      ],
    },
    aiUsage: {
      usedFor: ['Gợi ý ý tưởng và concept thiết kế ban đầu', 'Tạo hình ảnh minh họa với AI (có ghi nguồn)', 'Chỉnh sửa và cải thiện văn bản trong thiết kế'],
      commitment: 'Sản phẩm cuối cùng là kết quả của sự sáng tạo cá nhân. AI chỉ hỗ trợ ở khâu brainstorm và gợi ý.',
    },
  },
  {
    id: 'project-6',
    chapter: 'Chương 6',
    title: 'An toàn và liêm chính học thuật',
    summary: 'Bài tập quan trọng nhất giúp tôi hiểu về an toàn thông tin số, bảo vệ dữ liệu cá nhân, và đặc biệt là xây dựng ý thức liêm chính học thuật trong thời đại AI.',
    objectives: [
      'Nhận thức về các mối đe dọa an ninh mạng và cách phòng tránh',
      'Hiểu và thực hành bảo vệ thông tin cá nhân trên môi trường số',
      'Nắm vững các nguyên tắc liêm chính học thuật và cách trích dẫn đúng',
      'Sử dụng AI có trách nhiệm, không vi phạm đạo đức học thuật',
    ],
    process: {
      steps: [
        'Tìm hiểu về các mối đe dọa an ninh mạng: phishing, malware, social engineering',
        'Học cách tạo mật khẩu mạnh và bảo vệ tài khoản cá nhân',
        'Nghiên cứu về quy định liêm chính học thuật của trường đại học',
        'Tìm hiểu cách trích dẫn nguồn và tránh đạo văn',
        'Xây dựng cam kết cá nhân về sử dụng AI có trách nhiệm',
      ],
      tools: ['Google Search - Tra cứu quy định', 'Notion - Tổng hợp kiến thức', 'ChatGPT - Hỗ trợ phân tích tình huống (có kiểm chứng)', 'Turnitin - Hiểu về kiểm tra đạo văn'],
    },
    evidence: {
      screenshots: ['Ảnh bản cam kết liêm chính', 'Ảnh ví dụ trích dẫn đúng chuẩn'],
      links: ['Link bài viết về an toàn thông tin', 'Link cam kết liêm chính học thuật'],
    },
    analysis: {
      strengths: [
        'Hiểu rõ tầm quan trọng của liêm chính học thuật',
        'Biết cách trích dẫn nguồn đúng theo các định dạng phổ biến',
        'Có ý thức cao về bảo mật thông tin cá nhân trên mạng',
      ],
      improvements: [
        'Cần cập nhật thường xuyên về các hình thức lừa đảo mới',
        'Nên thực hành trích dẫn nhiều hơn để thành thạo',
      ],
      lessons: [
        'Liêm chính học thuật không chỉ là quy định mà là giá trị cốt lõi của người học',
        'Sử dụng AI không sai, sai là khi sao chép mà không hiểu và không ghi nguồn',
        'An toàn thông tin là trách nhiệm của mỗi cá nhân trong thời đại số',
      ],
    },
    aiUsage: {
      usedFor: ['Tìm hiểu về các quy định liêm chính học thuật', 'Phân tích các tình huống vi phạm đạo đức', 'Gợi ý cách trích dẫn nguồn đúng chuẩn'],
      commitment: 'Tôi cam kết: Mọi nội dung trong Portfolio này đều do tôi tự viết và chịu trách nhiệm. AI chỉ là công cụ hỗ trợ, không thay thế tư duy và sự sáng tạo của tôi.',
    },
  },
];

const Projects = () => {
  const reflectionPoints = [
    {
      icon: TrendingUp,
      title: 'Thay đổi trong cách học',
      content: 'Trước đây tôi học theo kiểu thụ động, chỉ đọc và ghi nhớ. Giờ tôi chủ động tìm kiếm, đánh giá nguồn tin, và sử dụng công nghệ như một công cụ hỗ trợ. Tư duy phản biện đã trở thành thói quen khi tiếp nhận thông tin mới.',
    },
    {
      icon: Lightbulb,
      title: 'Kỹ năng số tiến bộ nhất',
      content: 'Kỹ năng tìm kiếm và đánh giá thông tin đã cải thiện rõ rệt. Tôi biết sử dụng toán tử tìm kiếm nâng cao, phân biệt nguồn tin cậy, và tổng hợp thông tin có hệ thống. Đây là nền tảng quan trọng cho mọi hoạt động học tập và nghiên cứu.',
    },
    {
      icon: Brain,
      title: 'Bài học về sử dụng AI',
      content: 'AI là công cụ mạnh mẽ nhưng không thay thế được tư duy con người. Tôi học được cách sử dụng AI để hỗ trợ (gợi ý, giải thích, kiểm tra) chứ không phải sao chép. Quan trọng nhất là luôn kiểm chứng và viết lại bằng ngôn ngữ của mình.',
    },
    {
      icon: Shield,
      title: 'Nhận thức về liêm chính học thuật',
      content: 'Liêm chính học thuật không chỉ là quy định mà là giá trị cốt lõi của người học. Tôi hiểu rằng việc tự làm bài, trích dẫn đúng nguồn, và sử dụng AI có trách nhiệm sẽ giúp tôi thực sự học được và phát triển.',
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
