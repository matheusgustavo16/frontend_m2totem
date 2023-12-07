'use client'

import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";

export default function ModalTermos({ slug, onHide }: { slug?: string, onHide?: any; }){
  const fakeClose = () => {};
  return <>
    <Transition.Root show={true} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={fakeClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50 bg-opacity-75 backdrop-blur-sm transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:text-left">
                      <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                        Política de Privacidade
                      </Dialog.Title>
                      <div className="mt-2 text-base text-gray-700">
                        <div className="max-h-[60vh] overflow-y-auto flex flex-col gap-1">
                          <p>Este site &eacute; mantido e operado por M2 Leds.</p>
                          <p><strong>&nbsp;</strong></p>
                          <p>N&oacute;s coletamos e utilizamos alguns dados pessoais que pertencem &agrave;queles que utilizam nosso site. Ao faz&ecirc;-lo, agimos na qualidade de <strong>controlador</strong> desses dados e estamos sujeitos &agrave;s disposi&ccedil;&otilde;es da Lei Federal n. 13.709/2018 (Lei Geral de Prote&ccedil;&atilde;o de Dados Pessoais - LGPD).</p>
                          <p>N&oacute;s cuidamos da prote&ccedil;&atilde;o de seus dados pessoais e, por isso, disponibilizamos esta pol&iacute;tica de privacidade, que cont&eacute;m informa&ccedil;&otilde;es importantes sobre:</p>
                          <p><span>-<span>&nbsp;&nbsp;&nbsp;&nbsp;</span></span> Quem deve utilizar nosso site &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;</p>
                          <p><span>-<span>&nbsp;&nbsp;&nbsp;&nbsp;</span></span> Quais dados coletamos e o que fazemos com eles; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;- Seus direitos em rela&ccedil;&atilde;o aos seus dados pessoais; e&nbsp;&nbsp; - Como entrar em contato conosco.</p>
                          <p><strong>&nbsp;</strong></p>
                          <h1 className="font-bold">1. Quem deve utilizar nosso site</h1>
                          <p>Nosso site s&oacute; deve ser utilizado por pessoas com mais de dezoito anos de idade. Sendo assim, crian&ccedil;as e adolescentes n&atilde;o devem utiliz&aacute;-lo.</p>
                          <p><strong>&nbsp;</strong></p>
                          <h1 className="font-bold">2. Dados que coletamos e motivos da coleta</h1>
                          <p>Nosso site coleta e utiliza alguns dados pessoais de nossos usu&aacute;rios, de acordo com o disposto nesta se&ccedil;&atilde;o.</p>
                          <h1><em><span>1. Dados sens&iacute;veis</span></em></h1>
                          <p><strong>N&atilde;o</strong> ser&atilde;o coletados dados sens&iacute;veis de nossos usu&aacute;rios, assim entendidos aqueles definidos nos arts. 11 e seguintes da Lei de Prote&ccedil;&atilde;o de Dados Pessoais. Assim, <strong>n&atilde;o</strong> haver&aacute; coleta de dados sobre origem racial ou &eacute;tnica, convic&ccedil;&atilde;o religiosa, opini&atilde;o pol&iacute;tica, filia&ccedil;&atilde;o a sindicato ou a organiza&ccedil;&atilde;o de car&aacute;ter religioso, filos&oacute;fico ou pol&iacute;tico, dado referente &agrave; sa&uacute;de ou &agrave; vida sexual, dado gen&eacute;tico ou biom&eacute;trico, quando vinculado a uma pessoa natural.</p>
                          <h1><em><span>2. Coleta de dados n&atilde;o previstos expressamente</span></em></h1>
                          <p>Eventualmente, outros tipos de dados n&atilde;o previstos expressamente nesta Pol&iacute;tica de Privacidade poder&atilde;o ser coletados, desde que sejam fornecidos com o consentimento do usu&aacute;rio, ou, ainda, que a coleta seja permitida com fundamento em outra base legal prevista em lei.</p>
                          <p>Em qualquer caso, a coleta de dados e as atividades de tratamento dela decorrentes ser&atilde;o informadas aos usu&aacute;rios do site.</p>
                          <p><strong>&nbsp;</strong></p>
                          <h1 className="font-bold">3. Compartilhamento de dados pessoais com terceiros</h1>
                          <p>N&oacute;s n&atilde;o compartilhamos seus dados pessoais com terceiros. Apesar disso, &eacute; poss&iacute;vel que o fa&ccedil;amos para cumprir alguma determina&ccedil;&atilde;o legal ou regulat&oacute;ria, ou, ainda, para cumprir alguma ordem expedida por autoridade p&uacute;blica.</p>
                          <p><strong>&nbsp;</strong></p>
                          <h1 className="font-bold">4. Por quanto tempo seus dados pessoais ser&atilde;o armazenados</h1>
                          <p>Os dados pessoais coletados pelo site s&atilde;o armazenados e utilizados por per&iacute;odo de tempo que corresponda ao necess&aacute;rio para atingir as finalidades elencadas neste documento e que considere os direitos de seus titulares, os direitos do controlador do site e as disposi&ccedil;&otilde;es legais ou regulat&oacute;rias aplic&aacute;veis.</p>
                          <p>Uma vez expirados os per&iacute;odos de armazenamento dos dados pessoais, eles s&atilde;o removidos de nossas bases de dados ou anonimizados, salvo nos casos em que houver a possibilidade ou a necessidade de armazenamento em virtude de disposi&ccedil;&atilde;o legal ou regulat&oacute;ria.</p>
                          <p><strong>&nbsp;</strong></p>
                          <h1 className="font-bold">5. Bases legais para o tratamento de dados pessoais</h1>
                          <p>Cada opera&ccedil;&atilde;o de tratamento de dados pessoais precisa ter um fundamento jur&iacute;dico, ou seja, uma base legal, que nada mais &eacute; que uma justificativa que a autorize, prevista na Lei Geral de Prote&ccedil;&atilde;o de Dados Pessoais.</p>
                          <p>Todas as Nossas atividades de tratamento de dados pessoais possuem uma base legal que as fundamenta, dentre as permitidas pela legisla&ccedil;&atilde;o. Mais informa&ccedil;&otilde;es sobre as bases legais que utilizamos para opera&ccedil;&otilde;es de tratamento de dados pessoais espec&iacute;ficas podem ser obtidas a partir de nossos canais de contato, informados ao final desta Pol&iacute;tica.</p>
                          <p><strong>&nbsp;</strong></p>
                          <h1 className="font-bold">6. Direitos do usu&aacute;rio</h1>
                          <p>O usu&aacute;rio do site possui os seguintes direitos, conferidos pela Lei de Prote&ccedil;&atilde;o de Dados Pessoais:</p>
                          <p><span>-<span>&nbsp;</span></span> confirma&ccedil;&atilde;o da exist&ecirc;ncia de tratamento; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;</p>
                          <p><span>-<span>&nbsp;</span></span> acesso aos dados;&nbsp;&nbsp;</p>
                          <p><span>-<span>&nbsp;</span></span> corre&ccedil;&atilde;o de dados incompletos, inexatos ou desatualizados;&nbsp;&nbsp;</p>
                          <p><span>-<span>&nbsp;</span></span> anonimiza&ccedil;&atilde;o, bloqueio ou elimina&ccedil;&atilde;o de dados desnecess&aacute;rios, excessivos ou tratados em desconformidade com o disposto na lei;&nbsp;&nbsp;</p>
                          <p><span>-<span>&nbsp;</span></span> portabilidade dos dados a outro fornecedor de servi&ccedil;o ou produto, mediante requisi&ccedil;&atilde;o expressa, de acordo com a regulamenta&ccedil;&atilde;o da autoridade nacional, observados os segredos comercial e industrial;&nbsp;&nbsp;</p>
                          <p><span>-<span>&nbsp;</span></span> elimina&ccedil;&atilde;o dos dados pessoais tratados com o consentimento do titular, exceto nos casos previstos em lei;&nbsp;&nbsp;</p>
                          <p><span>-<span>&nbsp;</span></span> informa&ccedil;&atilde;o das entidades p&uacute;blicas e privadas com as quais o controlador realizou uso compartilhado de dados;&nbsp;&nbsp;</p>
                          <p><span>-<span>&nbsp;</span></span> informa&ccedil;&atilde;o sobre a possibilidade de n&atilde;o fornecer consentimento e sobre as consequ&ecirc;ncias da negativa;&nbsp;&nbsp; - revoga&ccedil;&atilde;o do consentimento.</p>
                          <p>&Eacute; importante destacar que, nos termos da LGPD, n&atilde;o existe um direito de elimina&ccedil;&atilde;o de dados tratados com fundamento em bases legais distintas do consentimento, a menos que os dados seja desnecess&aacute;rios, excessivos ou tratados em desconformidade com o previsto na lei.</p>
                          <h1><em><span>1. Como o titular pode exercer seus direitos</span></em></h1>
                          <p>Para garantir que o usu&aacute;rio que pretende exercer seus direitos &eacute;, de fato, o titular dos dados pessoais objeto da requisi&ccedil;&atilde;o, poderemos solicitar documentos ou outras informa&ccedil;&otilde;es que possam auxiliar em sua correta identifica&ccedil;&atilde;o, a fim de resguardar nossos direitos e os direitos de terceiros. Isto somente ser&aacute; feito, por&eacute;m, se for absolutamente necess&aacute;rio, e o requerente receber&aacute; todas as informa&ccedil;&otilde;es relacionadas.</p>
                          <p><strong>&nbsp;</strong></p>
                          <h1 className="font-bold">7. Medidas de seguran&ccedil;a no tratamento de dados pessoais</h1>
                          <p>Empregamos medidas t&eacute;cnicas e organizativas aptas a proteger os dados pessoais de acessos n&atilde;o autorizados e de situa&ccedil;&otilde;es de destrui&ccedil;&atilde;o, perda, extravio ou altera&ccedil;&atilde;o desses dados.</p>
                          <p>As medidas que utilizamos levam em considera&ccedil;&atilde;o a natureza dos dados, o contexto e a finalidade do tratamento, os riscos que uma eventual viola&ccedil;&atilde;o geraria para os direitos e liberdades do usu&aacute;rio, e os padr&otilde;es atualmente empregados no mercado por empresas semelhantes &agrave; nossa.</p>
                          <p>Entre as medidas de seguran&ccedil;a adotadas por n&oacute;s, destacamos as seguintes:</p>
                          <p><span>-<span>&nbsp;&nbsp;&nbsp;&nbsp;</span></span> Os dados de nossos usu&aacute;rios s&atilde;o armazenados em ambiente seguro;&nbsp;&nbsp; - Limitamos o acesso aos dados de nossos usu&aacute;rios, de modo que terceiros n&atilde;o autorizados n&atilde;o possam acess&aacute;-los;&nbsp;&nbsp;</p>
                          <p><span>-<span>&nbsp;&nbsp;&nbsp;&nbsp;</span></span> Utilizamos certificado SSL (<em>Secure Socket Layer</em>), de modo que a transmiss&atilde;o de dados entre os dispositivos dos usu&aacute;rios e nossos servidores aconte&ccedil;a de forma criptografada;&nbsp;&nbsp;</p>
                          <p><span>-<span>&nbsp;&nbsp;&nbsp;&nbsp;</span></span> Mantemos registros de todos aqueles que t&ecirc;m, de alguma forma, contato com nossos dados.</p>
                          <p>Ainda que adote tudo o que est&aacute; ao seu alcance para evitar incidentes de seguran&ccedil;a, &eacute; poss&iacute;vel que ocorra algum problema motivado exclusivamente por um terceiro - como em caso de ataques de <em>hackers</em> ou <em>crackers</em> ou, ainda, em caso de culpa exclusiva do usu&aacute;rio, que ocorre, por exemplo, quando ele mesmo transfere seus dados a terceiro. Assim, embora sejamos, em geral, respons&aacute;veis pelos dados pessoais que tratamos, nos eximimos de responsabilidade caso ocorra uma situa&ccedil;&atilde;o excepcional como essas, sobre as quais n&atilde;o temos nenhum tipo de controle.</p>
                          <p>De qualquer forma, caso ocorra qualquer tipo de incidente de seguran&ccedil;a que possa gerar risco ou dano relevante para qualquer de nossos usu&aacute;rios, comunicaremos os afetados e a Autoridade Nacional de Prote&ccedil;&atilde;o de Dados acerca do ocorrido, em conformidade com o disposto na Lei Geral de Prote&ccedil;&atilde;o de Dados.</p>
                          <p><strong>&nbsp;</strong></p>
                          <h1 className="font-bold">8. Reclama&ccedil;&atilde;o a uma autoridade de controle</h1>
                          <p>Sem preju&iacute;zo de qualquer outra via de recurso administrativo ou judicial, os titulares de dados pessoais que se sentirem, de qualquer forma, lesados, podem apresentar reclama&ccedil;&atilde;o &agrave; Autoridade Nacional de Prote&ccedil;&atilde;o de Dados.</p>
                          <p><strong>&nbsp;</strong></p>
                          <h1 className="font-bold">9. Altera&ccedil;&otilde;es nesta pol&iacute;tica</h1>
                          <p>A presente vers&atilde;o desta Pol&iacute;tica de Privacidade foi atualizada pela &uacute;ltima vez em: 08/11/2023.</p>
                          <p>Reservamo-nos o direito de modificar, a qualquer momento, as presentes normas, especialmente para adapt&aacute;-las &agrave;s eventuais altera&ccedil;&otilde;es feitas em nosso site, seja pela disponibiliza&ccedil;&atilde;o de novas funcionalidades, seja pela supress&atilde;o ou modifica&ccedil;&atilde;o daquelas j&aacute; existentes.</p>
                          <p>Sempre que houver uma modifica&ccedil;&atilde;o, nossos usu&aacute;rios ser&atilde;o notificados acerca da mudan&ccedil;a.</p>
                          <p><strong>&nbsp;</strong></p>
                          <h1 className="font-bold">10. Como entrar em contato conosco</h1>
                          <p>Para esclarecer quaisquer d&uacute;vidas sobre esta Pol&iacute;tica de Privacidade ou sobre os dados pessoais que tratamos, entre em contato com nosso Encarregado de Prote&ccedil;&atilde;o de Dados Pessoais, por algum dos canais mencionados abaixo:</p>
                          <p>Endere&ccedil;o postal: Rua Jubaia N37 Olaria Rio de janeiro -RJ</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <Link
                    className="inline-flex w-full justify-center rounded-md bg-emerald-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 sm:ml-3 sm:w-auto"
                    href={`/campaign/${slug}/terms?accept_all=true`}
                  >
                    Concordo com os Termos
                  </Link>
                  <Link
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    href={`/campaign/${slug}/terms`}
                  >
                    Cancelar
                  </Link>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  </>
}