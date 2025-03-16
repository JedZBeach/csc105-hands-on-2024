import React, { useState } from 'react';

function AboutMe() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [text, setText] = useState('Well Well Well Huh? ...(เนื้อเพลงไฟเย็น)...');
  const More = () => {
    setIsExpanded(!isExpanded);
    setText(
      isExpanded
        ? 'Well Well Well Huh? ...(เนื้อเพลงไฟเย็น)...'
        : `Well Well Well Huh? \nไอคนอย่างฉันมันจะไปรักใครเป็น\nหัวใจของฉันมันเป็นเหมือนดังไฟเย็น\nครั้งแรกที่เธอสัมผัสมันอาจจะดูอบอุ่นใจ\nแล้วมันก็หนาวเหน็บ\nไม่รู้มันเป็นเพราะเหตุใดจริงจริง\nไม่ว่ากี่ครั้งและกี่คราว\nรักใครกี่คนก็ปวดร้าว\nฉันภาวนากับหมู่ดาว\nอยากให้มีสักคนที่อยู่ยาว\nเฝ้าภาวนา to the moon\nร้องไปผ่านเสียง auto tune\nฉันนั้นไม่เข้าใจเลย\nฉันอาจแค่เคยรักเธอหรือว่าไม่เคยรักเลย\nทำไมตอนเธอไปฉันไม่ร้องไห้\nเหมือนว่าฉันไม่เสียใจกับทุกสิ่งที่เสียไป\nหรือต้องอยู่คนเดียวไปจนวันตาย\nกว่าวันนั้นคงไม่นาน\nฉันก็แค่ต้องอยู่กับความอ้างว้างมันไปอย่างงี้\nโฮ้โอโอโอ\nหรือว่าฉันมันไม่มีหัวใจอย่างที่ใครเขาพูดกัน\nแต่เธอรู้บ้างไหมฉันพยายาม\nแต่เหมือนทำไปเท่าไรก็ไม่มีใครเข้าใจ\nลึกลงไปข้างในมันทรมานดีแล้วที่ปล่อยให้เธอนั้นไป\nไม่จำเป็นต้องทนอยู่กับคนอย่างฉันต่อไปอย่างงี้\nโฮ้โอโอโอ\nรักเอ๋ยรักเป็นเช่นไรช่วยบอกฉันที\nทำไมถึงเจ็บฤดีในทุกทุกทีเศร้าหมองอารมณ์\nรักเอ๋ยรักรักเป็นเช่นไรช่วยบอกฉันหน่อย\nอย่าปล่อยให้ฉันนั้นคอย\nใจลอยกับรักอย่างงี้\nฉันอาจแค่เคยรักเธอหรือว่าไม่เคยรักเลย\nทำไมตอนเธอไปฉันไม่ร้องไห้\nเหมือนว่าฉันไม่เสียใจกับทุกสิ่งที่เสียไป\nหรือต้องอยู่คนเดียวไปจนวันตาย\nกว่าวันนั้นคงไม่นาน\nฉันก็แค่ต้องอยู่กับความอ้างว้างมันไปอย่างงี้\nโฮ้โอโอโอ\nหรือว่าฉันมันไม่มีหัวใจอย่างที่ใครเขาพูดกัน\nแต่เธอรู้บ้างไหมฉันพยายาม\nแต่เหมือนทำไปเท่าไรก็ไม่มีใครเข้าใจ\nลึกลงไปข้างในมันทรมานดีแล้วที่ปล่อยให้เธอนั้นไป\nไม่จำเป็นต้องทนอยู่กับคนอย่างฉันต่อไปอย่างงี้\nโฮ้โอโอโอ\nฉันอาจแค่เคยรักเธอหรือว่าไม่เคยรักเลย\nทำไมตอนเธอไปฉันไม่ร้องไห้\nเหมือนว่าฉันไม่เสียใจกับทุกสิ่งที่เสียไป\nหรือต้องอยู่คนเดียวไปจนวันตาย\nกว่าวันนั้นคงไม่นาน\nฉันก็แค่ต้องอยู่กับความอ้างว้างมันไปอย่างงี้\nโฮ้โอโอโอ\nหรือว่าฉันมันไม่มีหัวใจอย่างที่ใครเขาพูดกัน\nแต่เธอรู้บ้างไหมฉันพยายาม\nแต่เหมือนทำไปเท่าไรก็ไม่มีใครเข้าใจ\nลึกลงไปข้างในมันทรมานดีแล้วที่ปล่อยให้เธอนั้นไป\nไม่จำเป็นต้องทนอยู่กับคนอย่างฉันต่อไปอย่างงี้\nโฮ้โอโอโอ`
    );
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:items-center p-4"> 
      <div className="flex justify-center md:items-start md:justify-center mb-4 md:mb-0">
        <img
          src="..\src\image\noFilter.webp"
          alt="About Me"
          className="rounded-lg w-48 h-48 md:w-64 md:h-64 md:mr-25" 
        />
      </div>
      <div className="flex flex-col items-center md:items-start justify-center">
        <h1 className="text-3xl font-bold mb-2 md:text-3xl text-center md:text-left">About Me</h1> 
        <h2 className="text-2xl font-bold mb-2 md:text-2xl text-center md:text-left">Jobless</h2>
        <p className="text-sm mb-4 text-center md:text-left md:text-lg"> 
          <pre>{text}</pre>
        </p>
        <button
          className="bg-gray-900 hover:bg-red-700 hover:text-black text-gray-100 font-bold py-2 px-4 rounded-3xl"
          onClick={More}
        >
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
      </div>
    </div>
  );
}

export default AboutMe;