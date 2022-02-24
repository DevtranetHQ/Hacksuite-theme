import "./App.css";
import configValue from "./config";

export default function App() {
    return (
        <div>
            <header className="p-14 rounded-br-full relative text-white text-center">
                <h1 className="absolute cursor-pointer rotate-[-4.79deg] top-5 right-10 headline">
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 36 36"><path fill="currentColor" d="M31 27.19a1 1 0 0 0-1-.56h-.85a11 11 0 0 1-4.23-21.02a1 1 0 0 0 .61-1a1 1 0 0 0-.67-.91a14.7 14.7 0 0 0-5-.87a15.12 15.12 0 0 0 0 30.24a14.78 14.78 0 0 0 11-4.81a1 1 0 0 0 .14-1.07Zm-11.11 3.93a13.12 13.12 0 0 1 0-26.24a11.81 11.81 0 0 1 2 .16a13 13 0 0 0 5.72 23.53a12.75 12.75 0 0 1-7.72 2.55Z" class="clr-i-outline clr-i-outline-path-1"/><path fill="none" d="M0 0h36v36H0z"/></svg>
                </h1>
                <h1 className="title">The Dynamics Theme</h1>
            </header>

            <section>
                <h1 className="heading container-regular">
                    Containers
                </h1>
                <div className="border-2 border-dashed border-black my-5 container-regular">
                    <p className="text-24px">Regular size</p>
                </div>
                <div className="border-2 border-dashed border-black my-5 container-screen">
                    <p className="text-24px">Screen size</p>
                </div>
                <div className="border-2 border-dashed border-black my-5 container-medium">
                    <p className="text-24px">Medium size</p>
                </div>
                <div className="border-2 border-dashed border-black my-5 container-small">
                    <p className="text-24px">Small size</p>
                </div>
            </section>

            <main className="container-regular">
                <div className="mb-3">
                    <h1 className="heading">Text</h1>
                    <div className="md:grid grid-cols-2 rounded gap-2 mb-3 shadow">
                        <div className="p-3 md:p-10">
                            <h1 className="heading">Heading</h1>
                            <h1 className="ultratitle">Ultratitle</h1>
                            <h1 className="title">Title</h1>
                            <h1 className="subtitle">Subtitle</h1>
                            <h1 className="headline">Headline</h1>
                            <h1 className="subheadline">Subheadline</h1>
                            <h1 className="eyebrow">Eyebrow</h1>
                            <h1 className="lead">Lead</h1>
                            <h1 className="caption">Caption</h1>
                        </div>
                        <div className="p-3 md:p-10">
                            <h1 className="heading">Font</h1>
                            <h1 className="text-60px md:text-66px">Myriad Pro</h1>
                        </div>
                    </div>
                </div>

                <div className="mb-3">
                    <h1 className="heading">Primary button</h1>
                    <div className="md:grid grid-cols-3 items-center py-3">
                        <div>
                            <button className="button-big">Big button</button>
                        </div>
                        <div>
                            <button className="button-medium">Medium button</button>
                        </div>
                        <div>
                            <button className="button-small">Small button</button>
                        </div>
                    </div>
                    <h1 className="heading">Other buttons</h1>
                    <div className="md:grid grid-cols-3 gap-y-3 items-center py-3">
                        <div>
                            <button className="outline-button-big">Big outline button</button>
                        </div>
                        <div>
                            <button className="outline-button-medium">Medium outline button</button>
                        </div>
                        <div>
                            <button className="outline-button-small">Small outline button</button>
                        </div>
                        <div>
                            <button className="cta-button-big">Big cta button</button>
                        </div>
                        <div>
                            <button className="cta-button-medium">Medium cta btn</button>
                        </div>
                        <div>
                            <button className="cta-button-small">Small cta btn</button>
                        </div>
                        <div>
                            <button className="cta-button-big">
                                Big arrow btn<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="2em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M14 16.94v-4H5.08l-.03-2.01H14V6.94l5 5Z"/></svg>
                            </button>
                        </div>
                        <div>
                            <button className="cta-button-medium">Medium arrow btn &rarr;</button>
                        </div>
                        <div>
                            <button className="cta-button-small">Small arrow btn &rarr;</button>
                        </div>
                    </div>
                </div>

                <div className="mb-3">
                    <h1 className="heading">Cards</h1>
                    <div className="md:grid grid-cols-2 rounded gap-2 mb-3 shadow">
                        <div className="p-3 md:p-10">
                            <div className="card-primary">
                                <h1 className="text-42px">Primary</h1>
                            </div>
                            <div className="card-sunken">
                                <h1 className="text-42px">Sunken</h1>
                            </div>
                            <div className="card-interactive">
                                <h1 className="text-42px">Interactive</h1>
                            </div>
                            <div className="card-gradient-text">
                                <h1 className="text-42px">Gradient text</h1>
                            </div>
                            <div className="card-gradient">
                                <h1 className="text-42px">Gradient BG</h1>
                            </div>
                        </div>
                        <div className="p-3 md:p-10">
                            <div className="card-translucent">
                                <h1 className="text-42px">Translucent</h1>
                            </div>
                            <div className="card-translucent-dark">
                                <h1 className="text-42px break-all">TranslucentDark</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-3">
                    <h1 className="heading">Forms</h1>
                    <form>
                        <div className="md:grid grid-cols-2 gap-20 mb-3">
                            <div className="flex flex-col gap-5">
                                <div>
                                    <h1 className="text-30px">Full name</h1>
                                    <input className="form-input" placeholder="Sample name" type="text"/>
                                </div>
                                <div className="form-checkbox">
                                    <input id="checkbox" type="checkbox"/>
                                    <label for="checkbox">Checkbox</label>
                                </div>
                                <div>
                                    <h1 className="text-30px">Expandable form</h1>
                                    <textarea className="form-input" placeholder="Sample text is like in two or three sentences"/>
                                </div>
                            </div>
                            <div className="flex flex-col gap-5">
                                <div>
                                    <h1 className="text-30px">Drop down list</h1>
                                    <select className="form-input">
                                        <option>Fruit</option>
                                        <option>Vegetables</option>
                                        <option>Ice cream</option>
                                        <option>None of the above</option>
                                    </select>
                                </div>
                                <div className="form-radio">
                                    <input id="radio" type="radio"/>
                                    <label for="radio">Radio</label>
                                </div>
                                <div>
                                    <h1 className="text-30px">Slider bar</h1>
                                    <input className="form-range" type="range"/>
                                </div>
                            </div>
                        </div>
                        <button className="form-button" type="submit">Submit</button>
                    </form>
                </div>

                <div className="mb-3">
                    <h1 className="heading">Colors</h1>
                    <div className="p-3">
                        <h1 className="heading">Primary Colors</h1>
                        <div className="md:grid grid-cols-3 gap-2 mb-2">
                            <div className="bg-deep-sky-blue font-bold p-5 rounded text-center text-24px text-white uppercase">
                                <h1>Deep Sky Blue</h1>
                                <h1>#03A9F4</h1>
                            </div>
                            <div className="bg-fruit-salad font-bold p-5 rounded text-center text-24px text-white uppercase">
                                <h1>Fruit Salad</h1>
                                <h1>#4CAF50</h1>
                            </div>
                            <div className="bg-orange-peel font-bold p-5 rounded text-center text-24px text-white uppercase">
                                <h1>Orange Peel</h1>
                                <h1>#FF9800</h1>
                            </div>
                        </div>
                        <h1 className="heading">Other Notable Colors</h1>
                        <div className="md:grid grid-cols-3 gap-2 mb-2">
                            <div className="bg-link font-bold p-5 rounded text-center text-24px text-white uppercase">
                                <h1>For links</h1>
                                <h1>#3B4FE4</h1>
                            </div>
                            <div className="bg-heading font-bold p-5 rounded text-center text-24px text-white uppercase">
                                <h1>For headings</h1>
                                <h1>#1A1A1A</h1>
                            </div>
                            <div className="bg-body font-bold p-5 rounded text-center text-24px text-white uppercase">
                                <h1>For body text</h1>
                                <h1>#6E7180</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-3">
                    <h1 className="heading">Sample paragraph text</h1>
                    <div className="rounded p-3 md:p-10 shadow">
                        <p className="mb-2">This is a whole paragraph of text, include <code>code like this</code>, as well as <code><a href="#">linked code</a></code> & <a href="#">regular links</a>. The paragraph ended up being 1 sentence, but now I guess it’s <b>two</b>.</p>
                        <pre>Here's a code block! No highlighting to be found.</pre>
                    </div>
                </div>

                <div className="mb-3">
                    <h1 className="heading">Badges</h1>
                    <div className="pill-badge">Pill</div>
                    <div className="outline-badge">Outline</div>
                </div>

                <div className="mb-3">
                    <h1 className="heading">Font sizes</h1>
                    <div className="flex flex-wrap items-baseline gap-2">
                        <div className="inline-block truncate text-198px">198px</div>
                        <div className="inline-block truncate text-156px">156px</div>
                        <div className="inline-block truncate text-120px">120px</div>
                        <div className="inline-block truncate text-96px">96px</div>
                        <div className="inline-block truncate text-90px">90px</div>
                        <div className="inline-block truncate text-84px">84px</div>
                        <div className="inline-block truncate text-78px">78px</div>
                        <div className="inline-block truncate text-72px">72px</div>
                        <div className="inline-block truncate text-66px">66px</div>
                        <div className="inline-block truncate text-60px">60px</div>
                        <div className="inline-block truncate text-54px">54px</div>
                        <div className="inline-block truncate text-48px">48px</div>
                        <div className="inline-block truncate text-42px">42px</div>
                        <div className="inline-block truncate text-36px">36px</div>
                        <div className="inline-block truncate text-30px">30px</div>
                        <div className="inline-block truncate text-24px">24px</div>
                        <div className="inline-block truncate text-18px">18px</div>
                        <div className="inline-block truncate text-12px">12px</div>
                    </div>
                </div>

                <pre>{configValue}</pre>
            </main>
        </div>
    );
}
