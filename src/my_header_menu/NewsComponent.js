import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaiwanHealthNewsComponent = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiKey = 'd9259fe7192960fa4afe4346e3f666b0'; // 请将 YOUR_VALID_API_KEY 替换为您的 GNews API 密钥

  useEffect(() => {
    const fetchNews = async () => {
      try {
        // 固定主题为 "健康 飲食"
        const response = await axios.get(
          `https://gnews.io/api/v4/search?q=健康 飲食&lang=zh&country=tw&token=${apiKey}`
        );
        console.log('GNews API response for "健康 飲食":', response.data);
        if (response.data && response.data.articles) {
          setNews(response.data.articles); // 设置新闻数据
        } else {
          console.error('No articles found in response');
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching news:", error);
        setLoading(false);
      }
    };

    fetchNews();
  }, []); // 空数组意味着只在组件加载时执行一次

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <ul>
        {news.map((article, index) => (
          <li key={index} className='w-[62.414vw] h-[35.572vh] flex  items-center space-x-[3.125vw]'>
            {article.image && (
             <a href={article.url}><img src={article.image} className='w-[23.958vw] h-[28.430vh] ' /></a> 
            )}
            <div className='flex flex-col w-[30.052vw] h-[31.614vh]'>
              <span className='text-black text-[1.250vw] font-Noto_Sans_ch font-bold leading-[3.952vh] '>{article.title}<br/></span>
              <span className='text-black text-[1.042vw] font-Noto_Sans_ch font-normal leading-[3.293vh] '><br/>{article.description || 'No description available'}</span>
            </div>

          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaiwanHealthNewsComponent;
