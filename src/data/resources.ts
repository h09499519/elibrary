/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ResourceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  category: 'book' | 'course' | 'magazine';
  tags?: string[];
}

export const resources: ResourceItem[] = [
  // E-Library (Books)
  {
    id: 'elib-1',
    title: "Eliter's Study Space",
    description: 'Không gian học tập lý tưởng dành riêng cho các Eliters, nơi hội tụ cảm hứng và hiệu suất.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600',
    link: 'https://sites.google.com/view/elitelibraryyy/e-library/eliters-study-space',
    category: 'book',
    tags: ['Study Space', 'Elite']
  },
  {
    id: 'elib-2',
    title: "Eliter's Experience",
    description: 'Tổng hợp những trải nghiệm quý giá và bài học từ các thành viên xuất sắc của Elite.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600',
    link: 'https://sites.google.com/view/elitelibraryyy/e-library',
    category: 'book',
    tags: ['Experience', 'Shared']
  },
  {
    id: 'elib-3',
    title: 'Technical Skills',
    description: 'Bộ kỹ năng chuyên môn cần thiết để bứt phá trong môi trường làm việc chuyên nghiệp.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600',
    link: 'https://sites.google.com/view/elitelibraryyy/e-library',
    category: 'book',
    tags: ['Technical', 'Hard Skills']
  },
  {
    id: 'elib-4',
    title: 'Soft Skills',
    description: 'Rèn luyện kỹ năng mềm, giao tiếp và tư duy phản biện để trở thành nhà lãnh đạo tương lai.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600',
    link: 'https://sites.google.com/view/elitelibraryyy/e-library',
    category: 'book',
    tags: ['Soft Skills', 'Leadership']
  },
  {
    id: 'elib-5',
    title: "Eliter's Book",
    description: 'Tủ sách tinh hoa được chọn lọc kỹ lưỡng dành cho cộng đồng Elite.',
    image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&q=80&w=600',
    link: 'https://sites.google.com/view/elitelibraryyy/e-library/eliters-book',
    category: 'book',
    tags: ['Books', 'Selection']
  },

  // E-Learning (Courses)
  {
    id: 'elearn-1',
    title: 'Ăn trông nồi - Ngồi trông đúng tư thế',
    description: 'Nghỉ dịch 3 tháng rồi, sao không khiến mình heo thì hơn bằng những tips cực xịn về tư thế ngồi nhỉ?',
    image: './anh elearn/ele1.png',
    link: 'MAINTENANCE',
    category: 'course',
    tags: ['Sức khỏe', 'Tư thế']
  },
  {
    id: 'elearn-2',
    title: 'Elite của chúng mình!',
    description: 'Là một Eliter, hãy chắc chắn rằng mình đã trang bị đầy đủ kiến thức về FBA Elite nha!',
    image: './anh elearn/ele2.png',
    link: 'https://drive.google.com/file/d/1SlRhv8EiV4mv_G962bW5RuE-VzCiP7mV/view',
    category: 'course',
    tags: ['Văn hóa', 'Cộng đồng']
  },
  {
    id: 'elearn-3',
    title: '1001 cách sinh tồn tại FTU',
    description: 'Những bí kíp hay ho khi sống ở Hà Nội, cũng như khi là một sinh viên trường F.',
    image: './anh elearn/ele3.png',
    link: 'https://drive.google.com/file/d/1gBE6RjbBc9YbjsBY9vRDgB76UzWeUWBg/view',
    category: 'course',
    tags: ['Sinh viên', 'FTU']
  },
  {
    id: 'elearn-4',
    title: 'Kỹ năng MC',
    description: 'Cùng trang bị những kiến thức cần thiết để trở thành một MC thật xịn xò nhé!',
    image: './anh elearn/ele4.png',
    link: 'https://sites.google.com/view/elitelibraryyy/e-learning/el4?authuser=0',
    category: 'course',
    tags: ['Kỹ năng', 'MC']
  },
  {
    id: 'elearn-5',
    title: 'Người Trong Muôn Nghề HUMAN RESOURCES',
    description: 'Kiến thức hay ho, độc đáo về ngành Nhân sự!',
    image: './anh elearn/ele5.png',
    link: 'https://www.youtube.com/watch?v=iAGEwquvXsI',
    category: 'course',
    tags: ['Nghề nghiệp', 'HR']
  },
  // E-Magazine (Magazines)
  {
    id: 'emag-1',
    title: 'Elite Monthly - May 2024',
    description: 'Ấn phẩm tạp chí hàng tháng cập nhật tin tức và xu hướng mới nhất trong cộng đồng Elite.',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=600',
    link: 'https://sites.google.com/view/elitelibraryyy/e-magazine',
    category: 'magazine',
    tags: ['News', 'Monthly']
  },
  {
    id: 'emag-2',
    title: 'Tech & Innovation Elite',
    description: 'Chuyên san về công nghệ mã nguồn mở và đổi mới sáng tạo toàn cầu.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600',
    link: 'https://sites.google.com/view/elitelibraryyy/e-magazine',
    category: 'magazine',
    tags: ['Tech', 'Innovation']
  }
];


