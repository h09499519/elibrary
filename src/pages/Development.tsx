import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Search, 
  ExternalLink, 
  Compass, 
  User,
  TrendingUp,
  FileText,
  BookOpen,
  Crown,
  Book
} from 'lucide-react';

const TEMP_CATEGORIES = [
  "All",
  "Commercial",
  "Administration",
  "Operation",
  "Career Essens",
  "MT",
  "Soft skills"
];

const TEMP_BOOKS = [
  {
    genre: "Career Essens",
    title: "Cẩm nang Gen Z lần đầu đi làm",
    contributor: "Eliter",
    link: "https://drive.google.com/file/d/1rY7zxbOTeY13orzBsgChs-3-0B4LfPfn/view?usp=sharing"
  },
  {
    genre: "Commercial - Marketing",
    title: "Bí quyết làm Content Marketing hiệu quả",
    contributor: "Anh Đình Phú",
    link: "https://drive.google.com/file/d/1V-Yi4-6KB2LbIwWKi8VINxEe6QVq4H0D/view?usp=sharing"
  },
  {
    genre: "Commercial - Marketing",
    title: "Xây dựng nội dung Fanpage hiệu quả và khác biệt",
    contributor: "Anh Đình Phú",
    link: "https://drive.google.com/file/d/1aHPQatSzOAjPilDN4RUXVaoZmUwkyA_i/view?usp=sharing"
  },
  {
    genre: "Career Essens",
    title: "Hướng dẫn viết CV",
    contributor: "Anh Đình Phú",
    link: "https://drive.google.com/file/d/1SltA8kcD2AdpUQX_SgBW3ydcF5h07rDy/view?usp=sharing"
  },
  {
    genre: "Commercial - Marketing",
    title: "Insight từ A tới Á",
    contributor: "Anh Đình Phú",
    link: "https://drive.google.com/file/d/1jJzeol5rOlXKTBr4Uo5rc4YkTThzzhkq/view?usp=sharing"
  },
  {
    genre: "Commercial - Marketing",
    title: "Data visualization",
    contributor: "Anh Đình Phú",
    link: "https://drive.google.com/file/d/1vA5WNsERQ9fgwAIl4qFeZtlK0gJ18hpi/view?usp=sharing"
  },
  {
    genre: "Commercial - Marketing",
    title: "How to move up through levels of marketing?",
    contributor: "Anh Đình Phú",
    link: "https://drive.google.com/file/d/1dQchowOAsEbTi9J5E1i9kagUXGTr3m4E/view?usp=sharing"
  },
  {
    genre: "MT",
    title: "Management Trainee - Cuộc chiến nào cũng cần bí quyết để chiến thắng",
    contributor: "Anh Đình Phú",
    link: "https://drive.google.com/file/d/1Ti5gKuUKa9JSBztHYMmMbufvmwdOL6S6/view?usp=sharing"
  },
  {
    genre: "Commercial - Marketing",
    title: "Marketing - Học thế nào?",
    contributor: "Anh Đình Phú",
    link: "https://drive.google.com/file/d/1LHr33hKWhv1d3hWAxXfAZ1jm5JVb9Qsn/view?usp=sharing"
  },
  {
    genre: "Administration - HR",
    title: "Resourcing the Training and Development Function",
    contributor: "Anh Đình Phú",
    link: "https://drive.google.com/file/d/1mspHcuvuzRF46fhpuJCq23TGPYyaTlYU/view?usp=sharing"
  },

  {
    genre: "Career Essens",
    title: "How To Answer The 64 Toughest Interview Questions",
    contributor: "Minh Hằng",
    link: "https://drive.google.com/file/d/1wVIGhFN2EtOdt1fihdHrFqfUgiRksIs8/view?usp=sharing"
  },
  {
    genre: "Career Essens",
    title: "Những concept thiết kế slide",
    contributor: "Minh Hằng",
    link: "https://drive.google.com/file/d/1E8r7U8hTMqm5ORWxv1K4jS1NhkOlen3h/view?usp=sharing"
  },
  {
    genre: "Commercial - Marketing",
    title: "Cẩm nang content Marketing",
    contributor: "Phùng Hằng",
    link: "https://drive.google.com/file/d/1Yf1QfHlH3-IjRBp3WOZC1zPYq85vI7sA/view?usp=sharing"
  },
  {
    genre: "Operation - Management",
    title: "Sách 90 ngày đầu tiên làm sếp",
    contributor: "Chị Linh Bùi",
    link: "https://drive.google.com/file/d/1mNKYs3TQbGIcoeCG4p59SVc1zhTtWiQr/view?usp=sharing"
  },
  {
    genre: "Administration - HR",
    title: "Sách 200 employee engagement ideas for HR and Managers",
    contributor: "Chị Linh Bùi",
    link: "https://drive.google.com/file/d/1Yv9lXGmw9n_gxZj6OQHHf1CKpMDYntbF/view?usp=sharing"
  },
  {
    genre: "Administration - HR",
    title: "Sách 101 tình huống nhân sự",
    contributor: "Chị Linh Bùi",
    link: "https://drive.google.com/file/d/1kD-YVHvyAhhH_75RWuSN45PmCtUvLZjQ/view?usp=sharing"
  },
  {
    genre: "Commercial - Marketing",
    title: "Sách Marketing Research",
    contributor: "Chị Linh Bùi",
    link: "https://drive.google.com/file/d/1cFtK8gRXOIdJNbBl5pCJ_wzVsHnXT7hV/view?usp=sharing"
  },
  {
    genre: "Commercial - Marketing",
    title: "Sách Data driven content marketing",
    contributor: "Chị Linh Bùi",
    link: "https://drive.google.com/file/d/11kEzXzWbrJgOXv4bXfkpX39Cz4aFKr1j/view?usp=sharing"
  },
  {
    genre: "Commercial - Marketing",
    title: "Sách Facebook marketing all in one for dummies",
    contributor: "Chị Linh Bùi",
    link: "https://drive.google.com/file/d/1ucwgzwbtSBi2QeLyTtu6IAtt86mGKqRj/view?usp=sharing"
  },

  {
    genre: "Career Essens",
    title: "The Art & Science of Prediction",
    contributor: "Kim Thanh",
    link: "https://drive.google.com/file/d/1IBFsPrs-85haZtG1SBPtIB8bqwviI_sT/view?usp=sharing"
  },
  {
    genre: "Operation - Management",
    title: "The McKinsey Mind",
    contributor: "Kim Thanh",
    link: "https://drive.google.com/file/d/1LT_rLuSgn5bObjI3J0o-8EDtG7SUbrPE/view?usp=sharing"
  },
  {
    genre: "Operation - Strategic Plan",
    title: "The McKinsey Way",
    contributor: "Eliter",
    link: "https://drive.google.com/file/d/19n1nMv-1qyXxSbSzgLXcE2jE6V2KodnA/view?usp=sharing"
  },
  {
    genre: "Career Essens",
    title: "The Personal MBA",
    contributor: "Kim Thanh",
    link: "https://drive.google.com/file/d/1omBryNSFJWzjsO8hj6FFGdzMXV3Z3cB9/view?usp=sharing"
  },

  {
    genre: "Operation - Business Analysis",
    title: "Sách A Guide to the Business Analysis Body of Knowledge",
    contributor: "Mai Hạ",
    link: "https://drive.google.com/file/d/119APv2cRbkSw7qT4eNy5aJuJlCEf2rXt/view?usp=sharing"
  },
  {
    genre: "Operation - Strategic Plan",
    title: "BCG bàn về chiến lược",
    contributor: "Mai Hạ",
    link: "https://drive.google.com/file/d/1V2aZgHsAwWgJsB_rXc3Yt1trOWIgLFh8/view?usp=sharing"
  },

  {
    genre: "Operation - Management",
    title: "Sách Principles of Management",
    contributor: "Eliter",
    link: "https://drive.google.com/file/d/1tnpMnlZwhMQ_TjmEGlWkCO8Xaibs-zUx/view?usp=sharing"
  },
  {
    genre: "Commercial - Marketing",
    title: "Marketing for Hospitality and Tourism",
    contributor: "Thanh Huyền",
    link: "https://drive.google.com/file/d/1TcdBCVqokwggUcjbW31Da4UuSzIUV1YN/view?usp=sharing"
  },
  {
    genre: "Operation - Management",
    title: "Fundamentals of Management",
    contributor: "Thanh Huyền",
    link: "https://drive.google.com/file/d/1hNJeh5yyjQVYQaEM-pPe9UPEG_jZOokw/view?usp=sharing"
  },
  {
    genre: "Commercial - Sales",
    title: "How Performance Analytics Delivers Extraordinary Sales Results",
    contributor: "Minh Hằng",
    link: "https://drive.google.com/file/d/1HhfURCPmTJfD0IGNlIWPCNZMuAMw1WWk/view?usp=sharing"
  },
  {
    genre: "Commercial - Sales",
    title: "Critical Selling: How Top Performers Accelerate the Sales Process and Close More Deals",
    contributor: "Minh Hằng",
    link: "https://drive.google.com/file/d/1EcNlKXza26wM0nBeCawUZ4hlPP-KRQiH/view?usp=sharing"
  },
  {
    genre: "Administration - Legal",
    title: "Dynamic Business Law",
    contributor: "Minh Hằng",
    link: "https://drive.google.com/file/d/1I6revSSnbfFBgvxeTYV25-II_Zeo4Qv0/view?usp=sharing"
  },
  {
    genre: "Commercial - Marketing",
    title: "Sách 22 quy luật bất biến trong Marketing",
    contributor: "Eliter",
    link: "https://drive.google.com/file/d/1SAmRnnR2fwcL7B9dN-B-DkhNPT1xzG_e/view?usp=sharing"
  },
  {
    genre: "Commercial - Kinh doanh",
    title: "Sách 100 quy luật bất biến để thành công trong kinh doanh",
    contributor: "Eliter",
    link: "https://drive.google.com/file/d/1v_vyeafYAoN2sIOaS4CLrVR30BX7FEw2/view?usp=sharing"
  },
  {
    genre: "Career Essens",
    title: "Sách 201 câu hỏi hay nhất có thể đặt ra cho nhà tuyển dụng",
    contributor: "Eliter",
    link: "https://drive.google.com/file/d/1AiMKrV83P4AHeW1RJXDHXq7Yhck-JIHB/view?usp=sharing"
  },
  {
    genre: "Commercial - Marketing",
    title: "Sách Chăm sóc khách hàng phát huy lợi thế cạnh tranh",
    contributor: "Eliter",
    link: "https://drive.google.com/file/d/1aVHZE-LYZHV7Hr95EO_BmPNgDSsu_sVB/view?usp=sharing"
  },
  {
    genre: "Commercial - Kinh doanh",
    title: "Sách Lập Kế Hoạch Kinh Doanh",
    contributor: "Eliter",
    link: "https://drive.google.com/file/d/1FU8TC8cwnvxtEeNShx9wqgQ5Bsx6gbdh/view?usp=sharing"
  },

  {
    genre: "Commercial - Marketing",
    title: "Sách Marketing 5.0 shared by WorldLine Technology",
    contributor: "Chị Linh Bùi",
    link: "https://drive.google.com/file/d/1ClSRXl7wZEdAJfChb1kXt3_504JuA0QI/view?usp=sharing"
  },
  {
    genre: "MT",
    title: "Sách Business analysis technique",
    contributor: "Anh Mạnh Hùng",
    link: "https://drive.google.com/file/d/1TaermaUXRRjVIV5HECblqmEhLmqFNyI9/view?usp=sharing"
  },
  {
    genre: "MT",
    title: "Sách Kantar - Insight handbook 2020",
    contributor: "Anh Mạnh Hùng",
    link: "https://drive.google.com/file/d/1VyjQHskgTaGDEwp1rhL5yeOC9P0ZUjfJ/view?usp=sharing"
  },
  {
    genre: "MT",
    title: "Sách CBS Case Club Toolbox for Case Solving",
    contributor: "Anh Mạnh Hùng",
    link: "https://drive.google.com/file/d/1fymhamWOMz4wb0YLlibSxHW5zim_ZECS/view?usp=sharing"
  },
  {
    genre: "Commercial - Marketing",
    title: "Sophisticated Marketer Issue 6",
    contributor: "Anh Đình Phú",
    link: "https://drive.google.com/file/d/1dX72I-y9TJUVgFU2fEpgmaYaRKT_3sPa/view?usp=sharing"
  },

  {
    genre: "Administration - HR",
    title: "Đề xuất phát triển truyền thông và E-learning cho các trường Đại học - THPT thông qua nền tảng tiktok",
    contributor: "Anh Mạnh Hùng",
    link: "https://drive.google.com/file/d/14gaOa87-OBxB3mK950wZgLDbEOO6UImK/view?usp=sharing"
  },
  {
    genre: "Administration - HR",
    title: "Training Evaluation - HRD Academy",
    contributor: "Anh Mạnh Hùng",
    link: "https://drive.google.com/file/d/1by7G3q84rIvPfX0g6jZZDUvwngOgFPlo/view?usp=sharing"
  },
  {
    genre: "Administration - HR",
    title: "Hướng dẫn lập kế hoạch đào tạo 2021 - HRD Academy",
    contributor: "Anh Mạnh Hùng",
    link: "https://drive.google.com/file/d/1LRg54zT94vI_FWL8eXpiNqEzwR9TuBY7/view?usp=sharing"
  },
  {
    genre: "Administration - HR",
    title: "Bộ chương trình đào tạo doanh nghiệp - HSM",
    contributor: "Anh Mạnh Hùng",
    link: "https://drive.google.com/file/d/1KKpKCpRelxVzttHpUoG1B-HoDFWG9JwS/view?usp=sharing"
  },
  {
    genre: "Administration - HR",
    title: "Quản trị nhân sự cho người quản lý",
    contributor: "Anh Mạnh Hùng",
    link: "https://drive.google.com/file/d/1ujQ_diGaLc1z8FPbh9H-KN7XQB_5J_dO/view?usp=sharing"
  },
  {
    genre: "Administration - HR",
    title: "Cẩm nang xây dựng thương hiệu tuyển dụng chuyên nghiệp",
    contributor: "Anh Mạnh Hùng",
    link: "https://drive.google.com/file/d/1gNJq4i1xsTCXC1GCFjJFWjM8CHFWFJ1T/view?usp=sharing"
  },
  {
    genre: "Administration - HR",
    title: "Phát triển đội ngũ giảng viên nội bộ thiện chiến - HMS Workshop",
    contributor: "Anh Mạnh Hùng",
    link: "https://drive.google.com/file/d/1Fwo5pStxtxpfCYhlBQizd6ANqPaxQ2Qf/view?usp=sharing"
  },
  {
    genre: "MT",
    title: "The Case Study Handbook",
    contributor: "Eliter",
    link: "https://drive.google.com/file/d/1TIJFXZ1Hnvg_k0-jgf6e8FgszkOgUZrz/view?usp=sharing"
  },

  {
    genre: "Commercial - Marketing",
    title: "Marketing Insights From A To Z",
    contributor: "Xuân Bùi",
    link: "https://drive.google.com/file/d/1WXquJodgPxXW1tBXwcSeN13qAqgQoa33/view?usp=sharing"
  },
  {
    genre: "Commercial - Marketing",
    title: "Data Analysis",
    contributor: "Xuân Bùi",
    link: "https://drive.google.com/file/d/1U9_C4SnUPWcjWv7qKFJP0zRgT0qq4ljP/view?usp=sharing"
  },
  {
    genre: "Commercial - Marketing",
    title: "Definitive Guide to Social Marketing",
    contributor: "Xuân Bùi",
    link: "https://drive.google.com/file/d/1e0LAQcBvWHAH2IgxG5YiJrxJpk9J8OCM/view?usp=sharing"
  },
  {
    genre: "Commercial - Marketing",
    title: "Digital Marketing Plan Template",
    contributor: "Xuân Bùi",
    link: "https://drive.google.com/file/d/1cjrJncOX8jFz3wwqQYJ0bRObXofMoMqv/view?usp=sharing"
  },
  {
    genre: "Commercial - Marketing",
    title: "Inbound Marketing",
    contributor: "Xuân Bùi",
    link: "https://drive.google.com/file/d/1oYg0kATMuOpqsgd8IEcOP9126LC8jLxF/view?usp=sharing"
  },
  {
    genre: "Commercial - Marketing",
    title: "Làm bạn với hình làm tình với chữ",
    contributor: "Xuân Bùi",
    link: "https://drive.google.com/file/d/1dty6QIm6QDxcBC3yxd0yNaDzA28voOK_/view?usp=sharing"
  },
  {
    genre: "Commercial - Marketing",
    title: "Lắng nghe thị trường và thấu hiểu người tiêu dùng",
    contributor: "Xuân Bùi",
    link: "https://drive.google.com/file/d/1PBkobiGM3w8c5kPxgAKQuUIn7MljI2a0/view?usp=sharing"
  },
  {
    genre: "Commercial - Marketing",
    title: "MARKET RESEARCH",
    contributor: "Xuân Bùi",
    link: "https://drive.google.com/file/d/14cV9Pi0fcNavblqqWtJ5U3NTCpf4222V/view?usp=sharing"
  },
  {
    genre: "Commercial - Marketing",
    title: "Ogilvy on Advertising",
    contributor: "Xuân Bùi",
    link: "https://drive.google.com/file/d/13wgBBveaRn1QmlLTajZEMiLJY2TfVdMM/view?usp=sharing"
  },
  {
    genre: "Commercial - Marketing",
    title: "Report 2020 của Facebook",
    contributor: "Xuân Bùi",
    link: "https://drive.google.com/file/d/1FxEQQbGwBzJIIvQdaWg6gj85h9vOiOgX/view?usp=sharing"
  },
  {
    genre: "Commercial - Marketing",
    title: "Unilever Brand Planning Toolset",
    contributor: "Xuân Bùi",
    link: "https://drive.google.com/file/d/1LtIIA7pOWlg1EnsmlEnaYTSYxQ563CEs/view?usp=sharing"
  },
  {
    genre: "Career Essens - Business Analys",
    title: "Storytelling with data - A data visualization guide",
    contributor: "Anh Đức Đạt",
    link: "https://drive.google.com/open?id=1WG7XnQ_i4RhlXnFrbbOEW7ENStnv0BJc"
  },
  {
    genre: "Commercial - Marketing",
    title: "10 cases Marketing",
    contributor: "Kim Thanh",
    link: "https://drive.google.com/drive/folders/1u24KiK3GmI5pmWY3v-4WUdFzlARfB5Nw?usp=sharing"
  },
  {
    genre: "Administration - HR",
    title: "Sách Bản chất quản trị nguồn nhân lực gầy dựng \"đội quân tinh nhuệ\"",
    contributor: "Eliter",
    link: "https://drive.google.com/file/d/1GYKwOusMjexHrrjWr7au_i4XnZURkJp9/view?usp=sharing"
  },
  {
    genre: "Soft skills",
    title: "Phương pháp luyện tập để có giọng nói hay",
    contributor: "Ngọc Minh",
    link: "https://drive.google.com/file/d/1mbdU8JMsLa2G6Oj-RDWl_ipinKzjwbHg/view?usp=sharing"
  },
  {
    genre: "Soft skills",
    title: "Cách sửa lỗi phát âm để có một giọng nói chuẩn",
    contributor: "Ngọc Minh",
    link: "https://drive.google.com/file/d/1rfL9npouEKOqTnjRVmz1xWDh2THUDHH6/view?usp=sharing"
  },
  {
    genre: "Soft skills",
    title: "Sách Tứ thư lãnh đạo - Thuật dụng ngôn",
    contributor: "Ngọc Minh",
    link: "https://drive.google.com/file/d/1vVAOZAK7wv53FrSUEJJ0PuHeQ_GmLbZZ/view?usp=sharing"
  },
  {
    genre: "Soft skills",
    title: "Handbook Of Thinking Smart",
    contributor: "Phùng Hằng",
    link: "https://drive.google.com/file/d/1VgggixpUdOFvuYb4pb7HHkY2FgQb5z9o/view?usp=sharing"
  },
  {
    genre: "Soft skills",
    title: "101 Bí quyết đàm phán",
    contributor: "Chị Linh Bùi",
    link: "https://drive.google.com/file/d/1wh982u3fNR_JgrOgnEBwqihwrpoe9fmq/view?usp=sharing"
  },
  {
    genre: "Soft skills",
    title: "Hài hước 1 chút thế giới sẽ khác đi",
    contributor: "Phương Hà",
    link: "https://drive.google.com/file/d/1M1YbJsMsz3mcHLPIBd4P6FaXCptuaVBJ/view?usp=sharing"
  },
  {
    genre: "Soft skills",
    title: "Sách 11 bí quyết giao tiếp để thành công",
    contributor: "Eliter",
    link: "https://drive.google.com/file/d/1Il0fuk9BJiTbTY_uNgEcZpaWTjXZ8VVk/view?usp=sharing"
  },
  {
    genre: "Soft skills",
    title: "Sách 15 secrets successful people know about time management",
    contributor: "Eliter",
    link: "https://drive.google.com/file/d/1Bwz7VQ5QF0GbxEOXfyd7FEFkMlf1e5d9/view?usp=sharing"
  },
  {
    genre: "Soft skills",
    title: "Sách The 4 disciplines of execution",
    contributor: "Eliter",
    link: "https://drive.google.com/file/d/1gohQtO-MUfIk2a_ER9X41-vKyPdRn-mx/view?usp=sharing"
  },
  {
    genre: "Soft skills",
    title: "Sách 90 giây để thu hút bất kỳ ai",
    contributor: "Eliter",
    link: "https://drive.google.com/file/d/1Gk3EOPuY75JtQYzzmXXpYGin_h4_XttR/view?usp=sharing"
  },
  {
    genre: "Soft skills",
    title: "Sách The art of powerful questions",
    contributor: "Eliter",
    link: "https://drive.google.com/file/d/1Ig9DjPM7QrnDQ6h5QyjM7fJWKzP1mcoh/view?usp=sharing"
  },
  {
    genre: "Soft skills",
    title: "Sách Bạn có thể đàm phán bất cứ điều gì",
    contributor: "Eliter",
    link: "https://drive.google.com/file/d/1wPR2loFV9rlFT5cixlHSudKqEQolIxtN/view?usp=sharing"
  },
  {
    genre: "Soft skills",
    title: "Sách Emotional intelligence",
    contributor: "Eliter",
    link: "https://drive.google.com/file/d/1cXwbE2mYwUbC-Zcl4A3sBc-wdjADI641/view?usp=sharing"
  },
  {
    genre: "Soft skills",
    title: "Sách Finding your life purpose",
    contributor: "Eliter",
    link: "https://drive.google.com/file/d/1sKXAx3oWaMAgowT_8qZTXH6kNd7uKZxJ/view?usp=sharing"
  },
  {
    genre: "Soft skills",
    title: "Sách Personal values",
    contributor: "Eliter",
    link: "https://drive.google.com/file/d/1M9ObwJ67eD8K_cYY2-SoWsLy_WxolF4t/view?usp=sharing"
  },
  {
    genre: "Soft skills",
    title: "Sách Emotional needs in relationships",
    contributor: "Eliter",
    link: "https://drive.google.com/file/d/1Lukxy_b2E2lh7zG7H4lppYJaSub9fZ3X/view?usp=sharing"
  },
  {
    genre: "Soft skills",
    title: "Sách Self discipline",
    contributor: "Eliter",
    link: "https://drive.google.com/file/d/1RXHcWfPic-BaZbpu8BdFbiJTAHAXXiqf/view?usp=sharing"
  },
  {
    genre: "Soft skills",
    title: "The subtle art of not giving a f*ck",
    contributor: "Eliter",
    link: "https://drive.google.com/file/d/1hcrWWfvspa4uKiD-BBpLOgLqHTAZL4ge/view?usp=sharing"
  },
  {
    genre: "Soft skills",
    title: "Sách Dám bị ghét",
    contributor: "Dung Phùng",
    link: "https://drive.google.com/file/d/1R7HgdnpXLkiAITPFeROIzaraCct4rBHl/view"
  },
  {
    genre: "Soft skills",
    title: "Sách Khéo ăn khéo nói sẽ có được thiên hạ",
    contributor: "Dung Phùng",
    link: "https://drive.google.com/file/d/1QLeB4bGgmPvwyP9_voACpAKewWpnhC_t/view"
  },
  {
    genre: "Soft skills",
    title: "Sách Tiny Habit",
    contributor: "Eliter",
    link: "https://drive.google.com/file/d/1Qbvs4N9ggAxyqCPoEahP8XqwpTWBAgaL/view"
  },
  {
    genre: "Soft skills",
    title: "Sách Atomic Habit",
    contributor: "Eliter",
    link: "https://drive.google.com/file/d/1TYkRLrheTJ__p_aIcP-gAHen41mxR10i/view"
  },
  {
    genre: "Soft skills",
    title: "Sách Homo Deus - Lược sử tương lai",
    contributor: "Eliter",
    link: "https://drive.google.com/file/d/1Gyr0eZ97cD8-MycvAKyeDSq5NBiA_-xg/view"
  },
  {
    genre: "Soft skills",
    title: "Sapiens - Lược sử về loài người",
    contributor: "Eliter",
    link: "https://drive.google.com/file/d/1sZS-pyx9pVz3mg-edlz2LsGtbVuEZX7e/view"
  }
];

const getDriveId = (url: string | undefined): string | null => {
  if (!url) return null;
  if (url.includes('/drive/folders/')) return null;
  const fileDMatch = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (fileDMatch) return fileDMatch[1];
  const idParamMatch = url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (idParamMatch) return idParamMatch[1];
  return null;
};

const getThumbnailUrl = (url: string | undefined): string | null => {
  const id = getDriveId(url);
  if (!id) return null;
  return `https://drive.google.com/thumbnail?id=${id}&sz=w400`;
};

const getBadgeStyles = (genre: string): string => {
  if (genre.startsWith("Commercial")) {
    return "bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900/30";
  }
  if (genre.startsWith("Administration")) {
    return "bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-400 border border-purple-100 dark:border-purple-900/30";
  }
  if (genre.startsWith("Operation")) {
    return "bg-amber-50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400 border border-amber-100 dark:border-amber-900/30";
  }
  if (genre.startsWith("Career Essens")) {
    return "bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/30";
  }
  if (genre.startsWith("Soft skills")) {
    return "bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/30";
  }
  if (genre === "MT") {
    return "bg-rose-50 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400 border border-rose-100 dark:border-rose-900/30";
  }
  return "bg-slate-50 dark:bg-slate-900/30 text-slate-600 dark:text-slate-400 border border-slate-100 dark:border-slate-800/30";
};

const getGenreGradient = (genre: string): string => {
  if (genre.startsWith("Commercial")) {
    return "from-blue-600 to-indigo-700";
  }
  if (genre.startsWith("Administration")) {
    return "from-purple-600 to-fuchsia-700";
  }
  if (genre.startsWith("Operation")) {
    return "from-amber-500 to-orange-600";
  }
  if (genre.startsWith("Career Essens")) {
    return "from-emerald-500 to-teal-600";
  }
  if (genre.startsWith("Soft skills")) {
    return "from-indigo-500 to-violet-600";
  }
  if (genre === "MT") {
    return "from-rose-500 to-pink-600";
  }
  return "from-gray-600 to-slate-700";
};

const getGenreIcon = (genre: string) => {
  if (genre.startsWith("Commercial")) {
    return <TrendingUp className="w-8 h-8" />;
  }
  if (genre.startsWith("Administration")) {
    return <FileText className="w-8 h-8" />;
  }
  if (genre.startsWith("Operation")) {
    return <Compass className="w-8 h-8" />;
  }
  if (genre.startsWith("Career Essens")) {
    return <BookOpen className="w-8 h-8" />;
  }
  if (genre.startsWith("Soft skills")) {
    return <BookOpen className="w-8 h-8" />;
  }
  if (genre === "MT") {
    return <Crown className="w-8 h-8" />;
  }
  return <Book className="w-8 h-8" />;
};

export default function Development() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [columns, setColumns] = useState(3);

  const filteredDocuments = TEMP_BOOKS.filter(doc => {
    const matchesCategory = activeCategory === "All" || 
                            doc.genre.includes(activeCategory) || 
                            (activeCategory === "Career Essens" && doc.genre.startsWith("Career Essens"));
    const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          (doc.contributor && doc.contributor.toLowerCase().includes(searchQuery.toLowerCase())) ||
                          doc.genre.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-warm-white min-h-screen font-sans antialiased text-charcoal pb-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-[350px] bg-gradient-to-b from-accent/5 to-transparent pointer-events-none -z-10" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        {/* Navigation back */}
        <Link 
          to="/e-library"
          className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 hover:bg-accent hover:text-white rounded-full transition-all border border-gray-100 font-bold text-sm text-primary shadow-sm hover:shadow-md mb-16"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>VỀ E-LIBRARY</span>
        </Link>

        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-accent font-black uppercase text-xs tracking-[0.3em] mb-4 block">
            E-Library
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-primary uppercase tracking-tighter mb-6 leading-none">
            Eliter's Skills
          </h1>
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-medium">
            Tài liệu liên quan đến những kỹ năng chuyên môn, kỹ năng mềm giúp bạn cải thiện con đường sự nghiệp trong tương lai.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-12">
          {/* Scrollable Categories List */}
          <div className="w-full md:w-auto flex overflow-x-auto pb-2 pr-4 -mr-4 scrollbar-none gap-3 select-none">
            {TEMP_CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full font-bold text-sm tracking-wide transition-all duration-300 border shrink-0 whitespace-nowrap ${
                  activeCategory === category
                    ? "bg-accent border-accent text-white shadow-lg shadow-accent/20"
                    : "bg-white border-gray-100 text-primary hover:bg-gray-50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Tìm kiếm tài liệu, chuyên mục, học viên..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-5 py-3 pr-12 bg-white rounded-full border border-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent font-medium text-sm transition-all"
            />
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-400" />
          </div>
        </div>

        {/* Sleek Minimal Range Slider */}
        <div className="flex justify-end items-center gap-3 mb-8">
          <span className="text-xs font-bold text-gray-400 select-none uppercase tracking-wider">Cột hiển thị:</span>
          <input
            type="range"
            min="2"
            max="5"
            step="1"
            value={columns}
            onChange={(e) => setColumns(Number(e.target.value))}
            className="w-24 sm:w-32 h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-accent transition-all duration-300"
          />
          <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-accent/10 border border-accent/20 text-accent font-black text-sm">
            {columns}
          </span>
        </div>

        {/* Books Grid */}
        {filteredDocuments.length > 0 ? (
          <div className={`grid grid-cols-1 ${columns >= 4 ? 'gap-5 md:gap-6' : 'gap-8'} ${
            columns === 2 ? "md:grid-cols-2" :
            columns === 3 ? "md:grid-cols-3" :
            columns === 4 ? "md:grid-cols-4" :
            columns === 5 ? "md:grid-cols-5" : "md:grid-cols-3"
          }`}>
            {filteredDocuments.map((doc, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: Math.min(idx * 0.02, 0.3) }}
                className={`group bg-white rounded-[32px] md:rounded-[40px] flex flex-col justify-between hover:shadow-2xl hover:translate-y-[-8px] transition-all duration-500 border border-gray-100/50 ${columns >= 4 ? 'p-5' : 'p-8'}`}
              >
                <div>
                  {/* Book cover visual */}
                  <div className={`relative aspect-[4/3] w-full rounded-2xl bg-gray-50 overflow-hidden border border-gray-100 shadow-inner flex items-center justify-center ${columns >= 4 ? 'mb-5' : 'mb-8'}`}>
                    {getThumbnailUrl(doc.link) ? (
                      <img 
                        src={getThumbnailUrl(doc.link)!} 
                        alt={doc.title} 
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.onerror = null;
                          target.style.display = "none";
                          const parent = target.parentElement;
                          if (parent) {
                            const fallback = parent.querySelector('.bg-fallback-gradient');
                            if (fallback) fallback.classList.remove('hidden');
                          }
                        }}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    ) : null}
                    
                    {/* Fallback geometric design gradient if no thumbnail is available */}
                    <div className={`bg-fallback-gradient absolute inset-0 bg-gradient-to-br ${getGenreGradient(doc.genre)} flex flex-col items-center justify-center p-6 text-white text-center select-none ${getThumbnailUrl(doc.link) ? 'hidden' : ''}`}>
                      <span className="p-4 bg-white/10 backdrop-blur-md rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                        {getGenreIcon(doc.genre)}
                      </span>
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80">{doc.genre}</span>
                    </div>

                    <div className="absolute top-4 left-4 flex gap-2 flex-wrap z-10">
                      <span className={`rounded-full text-[10px] font-black uppercase tracking-widest leading-none ${getBadgeStyles(doc.genre)} ${columns >= 4 ? 'px-3 py-1' : 'px-4 py-1.5'}`}>
                        {doc.genre}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className={`font-black text-primary leading-tight mb-4 group-hover:text-accent transition-colors line-clamp-2 ${columns >= 4 ? 'text-base' : 'text-lg md:text-xl'}`}>
                    {doc.title}
                  </h3>

                  {/* Details */}
                  <div className={`flex flex-col text-gray-500 font-semibold ${columns >= 4 ? 'gap-1.5 mb-5' : 'gap-2 mb-8'}`}>
                    <span className="text-xs uppercase tracking-wider text-primary/80 flex items-center gap-2">
                      <Compass className="w-4 h-4 text-accent" /> Thể loại: {doc.genre}
                    </span>
                    <span className="text-xs uppercase tracking-wider text-gray-400 flex items-center gap-2">
                      <User className="w-4 h-4" /> Đóng góp: {doc.contributor}
                    </span>
                  </div>
                </div>

                <a 
                  href={doc.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`flex items-center justify-center bg-primary hover:bg-accent text-white font-black transition-all shadow-xl active:scale-95 group/btn ${columns >= 4 ? 'gap-2 w-full py-3.5 rounded-[16px] text-sm' : 'gap-4 w-full py-5 rounded-[24px] text-lg'}`}
                >
                  <span>XEM CHI TIẾT</span>
                  <ExternalLink className={`${columns >= 4 ? 'w-4 h-4' : 'w-5 h-5'} group-hover/btn:translate-x-1 transition-transform`} />
                </a>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center text-gray-400 border border-dashed border-gray-200 rounded-[40px]">
            <p className="text-xl font-bold uppercase tracking-widest">Không có tài liệu phù hợp</p>
          </div>
        )}
      </main>
    </div>
  );
}
