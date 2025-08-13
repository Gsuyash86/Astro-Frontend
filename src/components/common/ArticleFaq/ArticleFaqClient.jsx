import React, { useEffect, useRef, useState } from 'react';

const ArticleFaqClient = ({ faqs, mainData, widgetID }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const faqRef = useRef(null);

  const handleQuestionClick = (e, index, experimentID, contentID) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));

    if (window?.gtag) {
      window.gtag('event', 'contextual_qna_click', {
        eventCategory: 'contextual_qna',
        eventAction: 'click',
        eventLabel: mainData?.title,
        page_location: window.location.href,
        page_referrer: document.referrer,
        msid: mainData?.msid,
        widget_id: widgetID,
        experiment_id: experimentID,
        content_id: contentID,
      });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (
          entries?.[0]?.isIntersecting &&
          entries?.[0]?.intersectionRatio > 0 &&
          !faqRef.current.dataset.sent
        ) {
          if (window?.gtag) {
            window.gtag('event', 'contextual_qna_impression', {
              page_title: mainData?.title,
              page_location: window.location.href,
              page_referrer: document.referrer,
              msid: mainData?.msid,
              widget_id: widgetID,
            });
          }
          faqRef.current.dataset.sent = true;
        }
      },
      { threshold: 0.5 }
    );

    if (faqRef.current) observer.observe(faqRef.current);

    return () => {
      if (faqRef.current) observer.unobserve(faqRef.current);
    };
  }, []);

  return (
    <div ref={faqRef}>
      {faqs?.map((faq, index) => (
        <div
          key={`contextual_qna_${index}`}
          className={`Faqs ${activeIndex === index ? 'active' : ''}`}
          onClick={(e) =>
            handleQuestionClick(e, index, faq?.experimentID, faq?.contentID)
          }
        >
          <span id={`contextual_question_${index}`}>{faq?.question}</span>
          {activeIndex === index && (
            <>
              <p>{faq?.answer}</p>
              <a href={faq?.url} className="MoreLink">
                More on{' '}
                <img
                  src="/assets/icons/svg/td.svg"
                  height={22}
                  width={25}
                  alt="Fav-icon"
                />
              </a>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default ArticleFaqClient;
