function Map(props) {
  const area = props.data.searchParams;

  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43752.34963043631!2d-117.03590248320964!3d46.73489170877035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54a0212d22c061d1%3A0x3efd150de6eaad6c!2sPullman%2C%20WA!5e0!3m2!1sen!2sus!4v1628665621450!5m2!1sen!2sus"
      width="100%"
      height="300"
      style={{ border: "0" }}
      allowfullscreen=""
      loading="lazy"
    ></iframe>
  );
}

export default Map;
