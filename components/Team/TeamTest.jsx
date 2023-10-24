import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";

const people = [
  {
    name: "Fabian Hanso",
    title: "CTO & Founder",
    email: "f.hanso@revice-media.com?body=Sehr%20geehrter%20Herr%20Hanso,",
    telephone: "015164310456",
    imageUrl: "/Fabian_Profil.jpg",
  },
  {
    name: "Danny Kowalczuk",
    title: "CFO & Founder",
    email: "hey@dalu-services.com?body=Sehr%20geehrter%20Herr%20Kowalczuk,",
    imageUrl: "/Danny.png",
  },
  {
    name: "Luca Torres Neuer",
    title: "CMO & Founder",
    email:
      "l.torres@revice-media.com?body=Sehr%20geehrter%20Herr%20Torres%20Neuer,",
    telephone: "016092403158",
    imageUrl: "/luca.jpg",
  },
];

export default function TeamTest() {
  return (
    <div className="bg-light-gray-dalu py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-primary-dalu sm:text-4xl">
            Unsere Gründer
          </h2>
          <p className="mt-4 text-lg leading-8 text-primary-dalu">
            Wir sind der Meinung, dass man wissen sollte, mit wem man zusammen
            arbeitet.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto max-w-5xl mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3"
        >
          {people.map((person) => (
            <li
              key={person.email}
              className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
            >
              <div className="flex flex-1 flex-col p-8 mb-4">
                <img
                  className="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
                  src={person.imageUrl}
                  alt=""
                />
                <h3 className="mt-6 text-sm font-medium text-gray-900">
                  {person.name}
                </h3>
                <dl className="mt-1 flex flex-grow flex-col justify-between">
                  <dt className="sr-only">Title</dt>
                  <dd className="text-sm text-gray-500">{person.title}</dd>
                </dl>
              </div>
              <div>
                <div className="-mt-px flex divide-x divide-gray-200">
                  <div className="flex w-0 flex-1">
                    <a
                      href={`mailto:${person.email}`}
                      target="_blank"
                      className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                    >
                      <EnvelopeIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      Email
                    </a>
                  </div>
                  {person.telephone && (
                    <div className="-ml-px flex w-0 flex-1">
                      <a
                        href={`tel:${person.telephone}`}
                        className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                      >
                        <PhoneIcon
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                        Anrufen
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
