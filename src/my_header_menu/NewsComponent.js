import React, { useState, useEffect } from 'react';
import axios from 'axios';
import erro_img from '../assets/erro_img.svg';
const TaiwanHealthNewsComponent = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false); // 用于标记是否出错
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
          setError(true); // 设置为出错状态
        }
      } catch (error) {
        console.error("Error fetching news:", error);

        // 检查是否超出 API 使用限制
        if (error.response && error.response.status === 429) {
          console.error("API rate limit exceeded");
        }
        setError(true); // 设置为出错状态
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []); // 空数组意味着只在组件加载时执行一次

  if (loading) return <p>Loading...</p>;

  // 如果出错或者超出使用次数，显示默认画面
  if (error) {
    return (
      <li
        className="md:w-[62.414vw] md:h-[16.877vw] flex items-center mx-auto md:space-x-[3.125vw] space-x-[3.7810vw] w-[70.6649vw] h-[21.0000vw] "
      >
        
          <a >
            <img
              src={erro_img}
              className="md:w-[23.958vw] md:h-[13.489vw] w-[35.8540vw] h-[20.2647vw]"
            />
          </a>
        <div className="flex flex-col md:w-[30.052vw] md:h-[15.000vw] w-[42.8944vw] h-[20.3390vw]">
          <span className="text-black md:text-[1.250vw] text-[2.0860vw] font-sans font-bold md:leading-[1.562vw] leading-[3.6936vw]">
            出現問題了
            <br />
          </span>
          <span className="text-black md:text-[1.042vw] text-[1.5645vw] font-sans font-normal md:leading-[1.562vw] ">
            <br />
            今天沒出現新聞喔!
          </span>
        </div>
      </li>
    );
  }

  return (
    <div>
      <ul>
        {news.map((article, index) => (
          <li
            key={index}
            className="md:w-[62.414vw] md:h-[16.877vw] flex items-center mx-auto space-x-[3.125vw] w-[83.7027vw] h-[25.0326vw]"
          >
            {article.image && (
              <a href={article.url}>
                <img
                  src={article.image}
                  className="md:w-[23.958vw] md:h-[13.489vw] w-[34.6806vw] h-[19.6871vw]"
                />
              </a>
            )}
            <div className="flex flex-col md:w-[30.052vw] md:h-[15.000vw] w-[42.8944vw] h-[20.3390vw]">
              <span className="text-black md:text-[1.250vw] text-[2.0860vw] font-sans font-bold md:leading-[1.562vw] leading-[3.6936vw]">
                {article.title}
                <br />
              </span>
              <span className="text-black md:text-[1.042vw] text-[1.5645vw] font-sans font-normal md:leading-[1.562vw]">
                <br />
                {article.description || 'No description available'}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaiwanHealthNewsComponent;
