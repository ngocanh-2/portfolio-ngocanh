import { motion } from 'framer-motion';
import { ChevronRight, BookOpen, Target, Wrench, Image, BarChart3, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

type Screenshot = string | { src: string; caption: string };

interface ProjectCardProps {
  id: string;
  chapter: string;
  title: string;
  summary: string;
  objectives: string[];
  process: {
    steps: string[];
    tools: string[];
  };
  evidence: {
    screenshots: Screenshot[];
    links: string[];
  };
  analysis: {
    strengths: string[];
    improvements: string[];
    lessons: string[];
  };
  aiUsage: {
    usedFor: string[];
    commitment: string;
  };
  index: number;
}

const ProjectCard = ({ chapter, title, summary, objectives, process, evidence, analysis, aiUsage, index }: ProjectCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const sectionIcons = {
    objectives: Target,
    process: Wrench,
    evidence: Image,
    analysis: BarChart3,
    ai: Shield,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden card-hover border-border hover:border-primary/50 transition-all duration-300 group">
        <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-0">
                {chapter}
              </Badge>
              <CardTitle className="font-display text-xl group-hover:text-primary transition-colors">
                {title}
              </CardTitle>
              <CardDescription className="text-muted-foreground line-clamp-2">
                {summary}
              </CardDescription>
            </div>
            <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center shrink-0">
              <BookOpen className="w-6 h-6 text-primary-foreground" />
            </div>
          </div>
        </CardHeader>

        <CardContent className="pt-6">
          {/* Quick Summary - Always visible */}
          <div className="mb-4 p-4 bg-secondary/50 rounded-lg">
            <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full gradient-bg flex items-center justify-center text-xs text-primary-foreground">0</span>
              Tóm tắt nhanh
            </h4>
            <p className="text-sm text-muted-foreground">{summary}</p>
          </div>

          <Button
            variant="ghost"
            className="w-full justify-between hover:bg-secondary"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <span>{isExpanded ? 'Thu gọn' : 'Xem chi tiết'}</span>
            <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`} />
          </Button>

          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 space-y-6"
            >
              {/* 1. Objectives */}
              <Section
                icon={sectionIcons.objectives}
                number={1}
                title="Mục tiêu bài tập"
              >
                <ul className="space-y-2">
                  {objectives.map((obj, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      {obj}
                    </li>
                  ))}
                </ul>
              </Section>

              {/* 2. Process */}
              <Section
                icon={sectionIcons.process}
                number={2}
                title="Quy trình thực hiện"
              >
                <div className="space-y-4">
                  <div>
                    <h5 className="text-sm font-medium mb-2">Các bước thực hiện:</h5>
                    <ol className="space-y-2">
                      {process.steps.map((step, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="w-5 h-5 rounded-full bg-secondary text-foreground text-xs flex items-center justify-center shrink-0">
                            {i + 1}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                  <div>
                    <h5 className="text-sm font-medium mb-2">Công cụ sử dụng:</h5>
                    <div className="flex flex-wrap gap-2">
                      {process.tools.map((tool, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Section>

              {/* 3. Evidence */}
              <Section
                icon={sectionIcons.evidence}
                number={3}
                title="Minh chứng học tập"
              >
                <div className="space-y-4">
                  {evidence.screenshots.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {evidence.screenshots.map((screenshot, i) => {
                        const isImageObject = typeof screenshot === 'object' && screenshot.src;
                        
                        if (isImageObject) {
                          return (
                            <div key={i} className="space-y-2">
                              <div className="aspect-video bg-muted rounded-lg border border-border overflow-hidden">
                                <img 
                                  src={screenshot.src} 
                                  alt={screenshot.caption}
                                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                              </div>
                              <p className="text-xs text-muted-foreground text-center">{screenshot.caption}</p>
                            </div>
                          );
                        }
                        
                        return (
                          <div
                            key={i}
                            className="aspect-video bg-muted rounded-lg border-2 border-dashed border-border flex items-center justify-center"
                          >
                            <div className="text-center p-4">
                              <Image className="w-8 h-8 mx-auto text-muted-foreground mb-2" />
                              <p className="text-xs text-muted-foreground">{typeof screenshot === 'string' ? screenshot : screenshot.caption}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-4">
                      {[1, 2].map((i) => (
                        <div
                          key={i}
                          className="aspect-video bg-muted rounded-lg border-2 border-dashed border-border flex items-center justify-center"
                        >
                          <div className="text-center p-4">
                            <Image className="w-8 h-8 mx-auto text-muted-foreground mb-2" />
                            <p className="text-xs text-muted-foreground">Thêm ảnh minh chứng</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  {evidence.links.length > 0 && (
                    <div>
                      <h5 className="text-sm font-medium mb-2">Links tài liệu:</h5>
                      <ul className="space-y-1">
                        {evidence.links.map((link, i) => (
                          <li key={i}>
                            <a href={link} className="text-sm text-primary hover:underline">
                              {link}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </Section>

              {/* 4. Analysis */}
              <Section
                icon={sectionIcons.analysis}
                number={4}
                title="Phân tích – đánh giá"
              >
                <div className="space-y-4">
                  <div>
                    <h5 className="text-sm font-medium mb-2 text-accent">✓ Phần làm tốt:</h5>
                    <ul className="space-y-1">
                      {analysis.strengths.map((s, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-accent">•</span> {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-sm font-medium mb-2 text-destructive">✗ Phần cần cải thiện:</h5>
                    <ul className="space-y-1">
                      {analysis.improvements.map((s, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-destructive">•</span> {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-sm font-medium mb-2 text-primary">↻ Nếu làm lại:</h5>
                    <ul className="space-y-1">
                      {analysis.lessons.map((s, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary">•</span> {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Section>

              {/* 5. AI Usage */}
              <Section
                icon={sectionIcons.ai}
                number={5}
                title="Liêm chính học thuật & Sử dụng AI"
              >
                <div className="space-y-4">
                  <div>
                    <h5 className="text-sm font-medium mb-2">AI được sử dụng cho:</h5>
                    <ul className="space-y-1">
                      {aiUsage.usedFor.map((use, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary">•</span> {use}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
                    <p className="text-sm text-foreground font-medium">
                      📜 Cam kết: {aiUsage.commitment}
                    </p>
                  </div>
                </div>
              </Section>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

interface SectionProps {
  icon: React.ElementType;
  number: number;
  title: string;
  children: React.ReactNode;
}

const Section = ({ icon: Icon, number, title, children }: SectionProps) => (
  <div className="border-l-2 border-primary/20 pl-4 space-y-3">
    <h4 className="font-semibold text-sm flex items-center gap-2">
      <span className="w-6 h-6 rounded-full gradient-bg flex items-center justify-center text-xs text-primary-foreground">
        {number}
      </span>
      <Icon className="w-4 h-4 text-primary" />
      {title}
    </h4>
    {children}
  </div>
);

export default ProjectCard;
