import React from "react";

function BreakComponent() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-4 sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden bg-primary-dalu px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Kontaktieren Sie uns noch heute
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white">
            Wir werden uns umgehend mit Ihnen in Verbindung setzen, um die
            weiteren Schritte im Detail mit Ihnen zu besprechen.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="mailto:hey@dalu-services.com"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-secondary-dalu hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Projekt anfragen
            </a>
            <a
              href="/wir-sind-dalu"
              className="text-sm font-semibold leading-6 text-white"
            >
              Zur Kontaktseite
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BreakComponent;
