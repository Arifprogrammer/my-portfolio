const SocialLinks = ({ contactLink, icon: Icon, text }) => {
  return (
    <>
      <a href={contactLink} target="_blank" rel="noreferrer">
        <Icon
          className={`${text} hover:text-white hover:transition hover:duration-300`}
        />
      </a>
    </>
  );
};

export default SocialLinks;
