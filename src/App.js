import "./App.css";
import configValue from "./config";

export default function App() {
    return (
        <div className="flex flex-col sm:gap-1.5 md:gap-10">
            <header className="p-3 md:p-16 md:rounded-br-[145.5px] relative text-white text-center">
                <h1 className="md:absolute cursor-pointer md:rotate-[-25deg] top-3 right-5 headline">
                    <svg className="float-right" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 36 36"><path fill="currentColor" d="M31 27.19a1 1 0 0 0-1-.56h-.85a11 11 0 0 1-4.23-21.02a1 1 0 0 0 .61-1a1 1 0 0 0-.67-.91a14.7 14.7 0 0 0-5-.87a15.12 15.12 0 0 0 0 30.24a14.78 14.78 0 0 0 11-4.81a1 1 0 0 0 .14-1.07Zm-11.11 3.93a13.12 13.12 0 0 1 0-26.24a11.81 11.81 0 0 1 2 .16a13 13 0 0 0 5.72 23.53a12.75 12.75 0 0 1-7.72 2.55Z"/><path fill="none" d="M0 0h36v36H0z"/></svg>
                </h1>
                <h1 className="clear-both title">The Dynamics Theme</h1>
            </header>

            <section>
                {/* Containers */}
                <div className="container-regular">
                    <h1 className="heading">Containers</h1>
                </div>
                <div className="border-2 border-dashed border-[#282828] my-5 container-regular">
                    <p className="text-24px">Regular size</p>
                </div>
                <div className="border-2 border-dashed border-[#282828] my-5 container-screen">
                    <p className="text-24px">Screen size</p>
                </div>
                <div className="border-2 border-dashed border-[#282828] my-5 container-medium">
                    <p className="text-24px">Medium size</p>
                </div>
                <div className="border-2 border-dashed border-[#282828] my-5 container-small">
                    <p className="text-24px">Small size</p>
                </div>
            </section>

            <section className="container-regular">
                {/* Typography */}
                <h1 className="heading mb-5">Text</h1>
                <div className="lg:grid grid-cols-2 rounded gap-2 shadow" id="typography">
                    <div className="p-3 md:p-10 md:pb-0 lg:pb-10">
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
                    <div className="p-3 md:p-10 md:pt-0 lg:pt-10">
                        <h1 className="heading">Font</h1>
                        <h1 className="text-60px md:text-66px leading-[50px]">Myriad Pro</h1>
                    </div>
                </div>
            </section>

            <section className="container-regular">
                {/* Primary buttons */}
                <h1 className="heading mb-5">Primary buttons</h1>
                <div className="md:grid grid-cols-3 items-center">
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
            </section>

            <section className="container-regular">
                {/* Other buttons */}
                <h1 className="heading mb-5">Other buttons</h1>
                <div className="md:grid grid-cols-3 gap-y-5 items-center">
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
                            <span className="mr-5">Big arrow btn</span>
                            <svg width="78" height="25" viewBox="0 0 78 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M53.9478 24.875V17H-3.2522V8H53.9478V0.125L77.0478 12.5L53.9478 24.875Z" fill="white"/>
                            </svg>
                        </button>
                    </div>
                    <div>
                        <button className="cta-button-medium">
                            <span className="mr-3">Medium arrow btn</span>
                            <svg width="41" height="16" viewBox="0 0 41 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M28.2 15.7001V10.8H-1.70001V5.20005H28.2V0.300049L40.275 8.00005L28.2 15.7001Z" fill="white"/>
                            </svg>
                        </button>
                    </div>
                    <div>
                        <button className="cta-button-small">
                            <span className="mr-2">Small arrow btn</span>
                            <svg width="26" height="13" viewBox="0 0 26 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.2008 12.6523V8.88941H-0.538269V4.58902H18.2008V0.826172L25.7686 6.73922L18.2008 12.6523Z" fill="white"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </section>

            <section className="container-regular">
                {/* Cards */}
                <h1 className="heading mb-5">Cards</h1>
                <div className="md:grid grid-cols-2 rounded gap-2 shadow">
                    <div className="p-3 md:p-10">
                        <div className="card-primary">
                            <h1 className="text-24px md:text-42px">Primary</h1>
                        </div>
                        <div className="card-sunken">
                            <h1 className="text-24px md:text-42px">Sunken</h1>
                        </div>
                        <div className="card-interactive">
                            <h1 className="text-24px md:text-42px">Interactive</h1>
                        </div>
                        <div className="card-gradient-text">
                            <h1 className="text-24px md:text-42px">Gradient text</h1>
                        </div>
                        <div className="card-gradient">
                            <h1 className="text-24px md:text-42px">Gradient BG</h1>
                        </div>
                    </div>
                    <div className="p-3 md:p-10">
                        <div className="card-translucent">
                            <h1 className="text-24px md:text-42px">Translucent</h1>
                        </div>
                        <div className="card-translucent-dark">
                            <h1 className="break-all text-24px md:text-42px">TranslucentDark</h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container-regular">
                {/* Forms */}
                <h1 className="heading mb-5">Forms</h1>
                <form>
                    <div className="md:grid grid-cols-2 gap-20 mb-5">
                        <div className="flex flex-col gap-5 mb-5 md:mb-0">
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
                                <select className="form-select">
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
                                <input className="form-range" min="0" max="100" type="range"/>
                            </div>
                        </div>
                    </div>
                    <button className="form-button" type="submit">Submit</button>
                </form>
            </section>

            <section className="container-regular">
                {/* Colors */}
                <h1 className="heading mb-5">Colors</h1>
                <div className="px-5 lg:px-20">
                    <h1 className="heading mb-5">Primary Colors</h1>
                    <div className="md:grid grid-cols-3 gap-5 mb-10">
                        <div className="min-h-[120px] mb-2 md:mb-0 bg-deep-sky-blue font-bold p-5 py-28 rounded-lg text-center text-24px text-white uppercase">
                            <h1>Deep Sky Blue</h1>
                            <h1>#03A9F4</h1>
                        </div>
                        <div className="min-h-[120px] mb-2 md:mb-0 bg-fruit-salad font-bold p-5 py-28 rounded-lg text-center text-24px text-white uppercase">
                            <h1>Fruit Salad</h1>
                            <h1>#4CAF50</h1>
                        </div>
                        <div className="min-h-[120px] mb-2 md:mb-0 bg-orange-peel font-bold p-5 py-28 rounded-lg text-center text-24px text-white uppercase">
                            <h1>Orange Peel</h1>
                            <h1>#FF9800</h1>
                        </div>
                    </div>
                    <h1 className="heading mb-5">Other Notable Colors</h1>
                    <div className="md:grid grid-cols-3 gap-5">
                        <div className="min-h-[120px] mb-2 md:mb-0 bg-link font-bold p-5 py-28 rounded-lg text-center text-24px text-white uppercase">
                            <h1>For links</h1>
                            <h1>#3B4FE4</h1>
                        </div>
                        <div className="min-h-[120px] mb-2 md:mb-0 bg-heading font-bold p-5 py-28 rounded-lg text-center text-24px text-white uppercase">
                            <h1>For headings</h1>
                            <h1>#1A1A1A</h1>
                        </div>
                        <div className="min-h-[120px] mb-2 md:mb-0 bg-body font-bold p-5 py-28 rounded-lg text-center text-24px text-white uppercase">
                            <h1>For body text</h1>
                            <h1>#6E7180</h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container-regular">
                {/* Sample paragraph */}
                <h1 className="heading mb-5">Sample paragraph text</h1>
                <div className="rounded p-3 md:p-10 shadow">
                    <p className="mb-2">This is a whole paragraph of text, include <code>code like this</code>, as well as <code><a href="#">linked code</a></code> & <a href="#">regular links</a>. The paragraph ended up being 1 sentence, but now I guess it’s <b>two</b>.</p>
                    <pre>Here's a code block! No highlighting to be found.</pre>
                </div>
            </section>

            <section className="container-regular">
                {/* Badges */}
                <h1 className="heading mb-5">Badges</h1>
                <div className="pill-badge">Pill</div>
                <div className="outline-badge">Outline</div>
            </section>

            <section className="container-regular" id="font-sizes">
                {/* Font sizes */}
                <h1 className="heading mb-5">Font sizes</h1>
                <div className="md:flex flex-col">
                    <div className="flex flex-wrap md:flex-nowrap items-baseline leading-[170px]">
                        <div className="inline-block truncate text-198px">198px</div>
                        <div className="inline-block truncate text-156px">156px</div>
                    </div>
                    <div className="flex flex-wrap md:flex-nowrap gap-2 md:ml-5 items-baseline leading-[170px]">
                        <div className="inline-block truncate text-120px">120px</div>
                        <div className="inline-block truncate text-96px">96px</div>
                        <div className="inline-block truncate text-90px">90px</div>
                        <div className="inline-block truncate text-84px">84px</div>
                        <div className="inline-block truncate text-78px">78px</div>
                    </div>
                    <div className="flex flex-wrap md:flex-nowrap gap-3 md:ml-9 items-baseline leading-none">
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
            </section>

            <section className="container-regular">
                <pre>{configValue}</pre>
            </section>
        </div>
    );
}
