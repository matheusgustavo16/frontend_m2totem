import Link from "next/link";

export default function TableList({ people }: { people: any }) {
  return (
    <div className="mt-8 flow-root">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table className="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                >
                  Título da Campanha
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Cliente
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Estações
                </th>
                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {people.map((person: any, k: number) =>
                <tr key={k}>
                  <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                    <div className="flex items-center">
                      <div className="h-11 w-11 flex-shrink-0">
                        <img
                          className="h-11 w-11 rounded-full"
                          src={person.logo}
                          alt=""
                        />
                      </div>
                      <div className="ml-4">
                        <div className="font-medium text-gray-900">
                          {person.title}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                    <div className="text-gray-900">
                      {person.client}
                    </div>
                    <div className="mt-1 text-gray-500">
                      {person.client_email}
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                    {person.stations}
                  </td>
                  <td className="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                    <Link
                      href={`/campaign/${person.id}`}
                      target="_blank"
                      className="text-emerald-600 hover:text-emerald-900"
                    >
                      Acessar
                    </Link>
                    <Link
                      href={`/dashboard/campaigns/${person.id}`}
                      className="text-purple-600 hover:text-emerald-900 ml-4"
                    >
                      Templates
                    </Link>
                    <Link
                      href={`/dashboard/campaigns/edit/${person.id}`}
                      className="text-indigo-600 hover:text-indigo-900 mx-4"
                    >
                      Editar<span className="sr-only">, {person.name}</span>
                    </Link>
                    <Link
                      href={`/dashboard/campaigns/delete/${person.id}`}
                      className="text-red-600 hover:text-red-900"
                    >
                      Excluir<span className="sr-only">, {person.name}</span>
                    </Link>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
