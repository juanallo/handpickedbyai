const Subscribe = () => {
  return (
    <div className="bg-secondary-bg p-4 xl:p-12 h-64 flex flex-col align-middle justify-center text-center gap-8">
      <h4 className="font-monoton md:text-3xl text-lg flex flex-col"><span>Subscribe To your Daily</span> <span>Dose Of Inspiration</span></h4>
      <form className="subscribeInput">
        <input name="name" type="email" placeholder="email@email.com"></input>
        <button>Subscribe</button>
      </form>
    </div>
  );
};

export default Subscribe;
