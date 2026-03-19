export const ContactMe = () => {
  return (
    <div className="container flex flex-col">
      <div className="flex items-center justify-center gap-4 mt-8 mb-6">
        <div className="h-px w-20 bg-linear-to-r from-transparent to-[#d89b68]"></div>
        <p
          id="contact-section"
          className="text-lg font-semibold tracking-widest uppercase text-[#a47148]"
        >
          Contact me
        </p>
        <div className="h-px w-20 bg-linear-to-l from-transparent to-[#d89b68]"></div>
      </div>
      <p className="text-[24px]">
        Looking for a developer to take on your next project or just want to
        connect? Feel free to reach out, I'm always interested in hearing about
        new projects and opportunities!
      </p>
      <div className="flex justify-between my-6">
        <div>
          <p className="text-[20px] text-[#79542e] font-bold">Email</p>
          <a
            href="mailto:Koteykeethecat@gmail.com"
            className="inline-block text-[20px] transition-transform duration-300 ease-in-out hover:scale-105 hover:underline"
          >
            Koteykeethecat@gmail.com
          </a>
        </div>
        <div>
          <p className="text-[20px] text-[#79542e] font-bold">Telegram</p>
          <a
            href="https://t.me/KoteykeeCat"
            target="_blank"
            className="inline-block text-[20px] transition-transform duration-300 ease-in-out hover:scale-105 hover:underline"
          >
            t.me/KoteykeeCat
          </a>
        </div>
        <div>
          <p className="text-[20px] text-[#79542e] font-bold">GitHub</p>
          <a
            href="https://github.com/koteykee"
            target="_blank"
            className="inline-block text-[20px] transition-transform duration-300 ease-in-out hover:scale-105 hover:underline"
          >
            github.com/koteykee
          </a>
        </div>
        <div>
          <p className="text-[20px] text-[#79542e] font-bold">Resume</p>
          <a
            href="https://drive.google.com/file/d/1TLu-lDDtjpE3YoYi5nd9U4drRWG6xXsI/view?usp=sharing"
            target="_blank"
            className="inline-block text-[20px] transition-transform duration-300 ease-in-out hover:scale-105 hover:underline"
          >
            drive.google.com
          </a>
        </div>
      </div>
    </div>
  );
};
