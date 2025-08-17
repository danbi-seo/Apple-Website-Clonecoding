import { useGSAP } from "@gsap/react";

const GsapTo = () => {
  //ToDo : Implment the Gsap.to() method 
  useGSAP(() => {
    gsap.to('#blue-box', {
      x: 250,
      repeat: -1,
      yoyo: true,
      rotation: 360,
      duration: 2,
      ease: 'elastic'
    })
  },[]);

  return(
    <main>
      <h1>GsapTo</h1>
      <p className="mt-5 text-gray-500">
        The <code>gasp.to()</code> method is used to animate elements from their current state to a new state.
      </p>
      <p className="mt-5 text-gray-500">
        The <code>gsap.to()</code> method is similar to the {" "}
        <code>gsap.from()</code> method, but the difference is that the {" "}
        <code>gsap.to()</code> method animates elements from their current state
        to a new state, while the <code>gsap.form</code> method animates elements from a new to their current state.
      </p>
      <p className="mt-5 text-gray-500">
        Read more about the {" "}
        <a
          href="https://greensock.com/docs/v3/GSAP/gsap.to()"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          gasp.to()
        </a>{" "}
        method.
      </p>
      <div className="mt-20">
        <div id="blue-box" className="w-20 h-20 bg-blue-500 rounded-lg"/>
      </div>
    </main>
  );
}

export default GsapTo; 