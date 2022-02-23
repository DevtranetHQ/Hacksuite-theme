import "./App.css";
import configValue from "./config";

export default function App() {
    return (
        <>
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
                            <button className="cta-button-big">Big arrow btn &rarr;</button>
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
                    <h1 className="heading">Sample paragraph text</h1>
                    <div className="rounded p-3 md:p-10 shadow">
                        <p>This is a whole paragraph of text, include code like this, as well as linked code & regular links. The paragraph ended up being 1 sentence, but now I guess it’s two.</p>
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
        </>
    );
}
