import { GetFeedDashboard } from "@/app/api/services/firebase";
import { Antenna, ChefHat, Users2 } from "lucide-react"
import { Fragment } from "react";

const activity = [
  {
    id: 1,
    type: 'comment',
    person: { name: 'Eduardo Benz', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. ',
    date: '6d ago',
  },
  {
    id: 2,
    type: 'assignment',
    person: { name: 'Hilary Mahy', href: '#' },
    assigned: { name: 'Kristin Watson', href: '#' },
    date: '2d ago',
  },
  {
    id: 3,
    type: 'tags',
    person: { name: 'Hilary Mahy', href: '#' },
    tags: [
      { name: 'Bug', href: '#', color: 'fill-red-500' },
      { name: 'Accessibility', href: '#', color: 'fill-indigo-500' },
    ],
    date: '6h ago',
  },
  {
    id: 4,
    type: 'comment',
    person: { name: 'Jason Meyers', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. Scelerisque amet elit non sit ut tincidunt condimentum. Nisl ultrices eu venenatis diam.',
    date: '2h ago',
  },
];

function classNames(...classes:any) {
  return classes.filter(Boolean).join(' ')
};

const ActivityFeed = async() => {
  
  const feed:any = await GetFeedDashboard();

  return (<>
    <div className="flow-root mt-12">
      <h3 className="text-base font-semibold leading-6 text-gray-900 mb-6">Feed de Atividades</h3>
      <ul role="list" className="-mb-8">
        {feed.map((activityItem:any, activityItemIdx:number) => (
          <li key={activityItem.id}>
            <div className="relative pb-8">
              {activityItemIdx !== activity.length - 1 ? (
                <span className="absolute left-5 top-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
              ) : null}
              <div className="relative flex items-start space-x-3">
                {activityItem.type === 'campaigns' ? (
                  <>
                    <div className="relative">
                      <img
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 ring-8 ring-white"
                        src={activityItem.logo}
                        alt=""
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div>
                        <div className="text-sm">
                          <p className="font-medium text-gray-900">
                            Nova campanha {activityItem.title}
                          </p>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">Cliente: {activityItem.client}</p>
                      </div>
                      <div className="mt-2 text-sm text-gray-700">
                        <p>Criado em {new Date(activityItem.createdAt).toLocaleString('pt-br')}</p>
                      </div>
                    </div>
                  </>
                ) : activityItem.type === 'stations' ? (
                  <>
                    <div>
                      <div className="relative px-1">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 ring-8 ring-white">
                          <Antenna className="h-5 w-5 text-white" aria-hidden="true" />
                        </div>
                      </div>
                    </div>
                    <div className="min-w-0 flex-1 py-1.5">
                      <div className="text-sm text-gray-500">
                        Nova Estação{' '}
                        <span className="font-medium text-gray-900">
                          {activityItem.id}
                        </span>{' '}
                        <span className="whitespace-nowrap">{new Date(activityItem.createdAt).toLocaleString('pt-br')}</span>
                      </div>
                    </div>
                  </>
                ) : activityItem.type === 'pictures' ? (
                  <>
                    <div className="relative">
                      <img
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 ring-8 ring-white"
                        src={activityItem.picture}
                        alt=""
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div>
                        <div className="text-sm">
                          <p className="font-medium text-gray-900">
                            Foto capturada
                          </p>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">Criado em {new Date(activityItem.createdAt).toLocaleString('pt-br')}</p>
                      </div>
                    </div>
                  </>
                ) : null}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </>) 
};

export default ActivityFeed;