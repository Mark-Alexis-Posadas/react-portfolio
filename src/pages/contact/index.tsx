export default function Contact() {
  return <section className="scroll-mt-20 py-12 pb-20" id="contact" aria-labelledby="contact-title">
    <p className="section-kicker">Get in touch</p><h2 id="contact-title" className="section-title">Let’s build something useful.</h2>
    <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-600 dark:text-zinc-400">Have a product idea, a full-stack challenge, or a role that fits? Send a note and I’ll get back to you.</p>
    <form className="mt-6 grid max-w-2xl gap-4" action="mailto:markalexisposadas@gmail.com" method="post" encType="text/plain">
      <div className="grid gap-4 sm:grid-cols-2"><label className="grid gap-2 text-sm font-medium">Name<input required name="name" autoComplete="name" className="contact-input" /></label><label className="grid gap-2 text-sm font-medium">Email<input required type="email" name="email" autoComplete="email" className="contact-input" /></label></div>
      <label className="grid gap-2 text-sm font-medium">How can I help?<textarea required name="message" rows={5} className="contact-input resize-y" /></label>
      <button type="submit" className="w-fit rounded-lg bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 dark:bg-white dark:text-black dark:hover:bg-cyan-300">Contact / Work With Me</button>
      <p className="text-xs text-zinc-500">This form opens your email app with the message prepared.</p>
    </form>
  </section>;
}
