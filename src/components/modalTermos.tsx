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
                        <div className="max-h-[60vh] overflow-y-auto flex flex-col gap-2">
                          {/* <p>Este site &eacute; mantido e operado por M2 Leds.</p>
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
<p>Endere&ccedil;o postal: Rua Jubaia N37 Olaria Rio de janeiro -RJ</p> */}
                          <h1>Bem-vindo(a) à Política de Privacidade do Consumidor da Coca‑Cola (Política de Privacidade).</h1>
                          <p>A Coca‑Cola Company e suas afiliadas (coletivamente, <strong><i>Coca‑Cola</i></strong> ou <strong><i>nós</i></strong>) levamos a sério o seu direito à privacidade. Agradecemos que você nos confie suas informações pessoais e o respeito à sua privacidade é a essência de nossas interações com você.</p>
                          <p>O tratamento de informações pessoais pela Coca‑Cola é guiado por estes princípios:</p>
                          <p>&nbsp;</p>
                          <ul>
                            <li>Transparência</li>
                            <li>Respeito</li>
                            <li>Confiança</li>
                            <li>Justiça</li>
                          </ul>
                          <p>Data de vigência:&nbsp;13 de julho de 2023</p>
                          <p>Esta Política de Privacidade descreve as informações pessoais que a Coca‑Cola recolhe de ou sobre os usuários dos sites, aplicativos para dispositivos móveis (<strong><i>Aplicativos</i></strong>), widgets e outros serviços online e offline que a Coca‑Cola opera (coletivamente, os <strong><i>Serviços</i></strong>) e como usamos e protegemos essas informações pessoais. Esta Política de Privacidade também explica como os usuários podem fazer escolhas acerca de suas informações pessoais.</p>
                          <p>Quando nos referimos a <strong><i>informações pessoais</i></strong> nesta Política de Privacidade, queremos dizer informações que identificam ou podem ser usadas para identificar individualmente uma pessoa. Isso significa que as informações pessoais incluem identificadores diretos (como o nome, por exemplo) e identificadores indiretos (como a ID e o endereço IP do computador ou do dispositivo móvel). Quando nos referimos a <strong><i>você</i></strong> ou <strong><i>usuário</i></strong>, trata-se de alguém que usa qualquer um dos Serviços. Quando nos referimos a <strong><i>controlador</i></strong>, trata-se da pessoa ou entidade que determina quais informações pessoais são coletadas de ou sobre você e como essas informações pessoais são usadas e protegidas.</p>
                          <p>A forma como coletamos, usamos e protegemos suas informações pessoais está sujeita às leis das localidades em que operamos. Isso significa que as práticas podem variar de acordo com a localidade. Para mais informações, consulte <a href="#13">Direitos e Opções de Privacidade</a>, que inclui descrições adicionais de seus direitos e de nossas obrigações em certas jurisdições-chave e a quem contatar.</p>
                          <p><strong>SE TIVER DÚVIDAS SOBRE COMO A COCA-COLA PROCESSA SUAS INFORMAÇÕES PESSOAIS, ENTRE EM CONTATO COM</strong> <a href="mailto:privacy@coca-cola.com"><strong>PRIVACY@COCA-COLA.COM</strong></a>.</p>
                          <h2>O QUE HÁ NESTA POLÍTICA DE PRIVACIDADE?</h2>
                          <p>Esta Política de Privacidade é dividida nas seguintes seções:</p>
                          <p><a href="#1">1. QUANDO ESTA POLÍTICA DE PRIVACIDADE SE APLICA?</a></p>
                          <p><a href="#2">2. ONDE ESTA POLÍTICA DE PRIVACIDADE SE APLICA?&nbsp;</a></p>
                          <p><a href="#3">3. QUE TIPOS DE INFORMAÇÕES PESSOAIS A COCA-COLA COLETA E POR QUÊ?&nbsp;</a></p>
                          <p><a href="#4">4. COMO A COCA-COLA USA AS INFORMAÇÕES PESSOAIS?&nbsp;</a></p>
                          <p><a href="#5">5. A COCA-COLA USA COOKIES?</a></p>
                          <p><a href="#6">6. COMO A COCA-COLA COMPARTILHA AS INFORMAÇÕES PESSOAIS?&nbsp;</a></p>
                          <p><a href="#7">7. COMO A COCA-COLA PROTEGE AS INFORMAÇÕES PESSOAIS?</a></p>
                          <p><a href="#8">8. POR QUANTO TEMPO A COCA-COLA RETÉM AS INFORMAÇÕES PESSOAIS?</a></p>
                          <p><a href="#9">9. QUAIS SÃO AS OPÇÕES DISPONÍVEIS PARA AS INFORMAÇÕES PESSOAIS?&nbsp;</a></p>
                          <p><a href="#10">10. COMO A COCA-COLA PROTEGE A PRIVACIDADE DAS CRIANÇAS?</a></p>
                          <p><a href="#11">11. A COCA-COLA TRANSFERE INFORMAÇÕES PESSOAIS PARA OUTROS PAÍSES?&nbsp;</a></p>
                          <p><a href="#12">12. QUANDO ESTA POLÍTICA DE PRIVACIDADE É ALTERADA?&nbsp;</a></p>
                          <p><a href="#13">13. DIREITOS E OPÇÕES DE PRIVACIDADE&nbsp;</a></p>
                          <h3>1.&nbsp;QUANDO ESTA POLÍTICA DE PRIVACIDADE SE APLICA?</h3>
                          <p>Esta Política de Privacidade foi publicada e está em vigor para novos <i>usuários</i> em&nbsp;13 de julho de 2023</p>
                          <p>As versões anteriores das políticas de privacidade da Coca‑Cola se aplicam até&nbsp;23 de julho de 2023</p>
                          <p>e estão disponíveis mediante solicitação a <a href="mailto:privacy@coca-cola.com">Privacy@coca-cola.com</a>.</p>
                          <h3>2.&nbsp;ONDE ESTA POLÍTICA DE PRIVACIDADE DE APLICA?</h3>
                          <p>A Política de Privacidade se aplica às informações pessoais coletadas dos usuários dos Serviços nos quais a Política de Privacidade é publicada ou vinculada, quando a Política de Privacidade é especificamente mencionada nos Serviços ou quando a Coca‑Cola pede a você que a aceite. Esta Política de Privacidade também cobre informações pessoais que coletamos de consumidores que entram em contato conosco por e-mail, telefone e offline, como durante um evento presencial.</p>
                          <h3>Saiba mais</h3>
                          <p>Esta Política de Privacidade também pode se aplicar às informações pessoais fornecidas a nós pelos consumidores que interagem conosco através das mídias sociais. Entre em contato conosco em <a href="mailto:privacy@coca-cola.com">Privacy@coca-cola.com</a> se você tiver dúvidas quanto à aplicação desta Política de Privacidade a informações específicas ligadas às redes sociais.</p>
                          <p>Esta Política de Privacidade não se aplica a sites ou a outros serviços online operados por outras organizações. Esses outros sites e serviços seguem suas próprias políticas de privacidade, <i>não</i> esta Política de Privacidade. Certifique-se de consultar essas políticas de privacidade para que você saiba como suas informações são tratadas.</p>
                          <h3>3.&nbsp;QUE TIPOS DE INFORMAÇÕES PESSOAIS A COCA-COLA COLETA E POR QUÊ?</h3>
                          <p><strong>a.</strong> <strong>Informações que você optou por nos fornecer</strong></p>
                          <p>Coletamos informações pessoais que você optou por compartilhar conosco.</p>
                          <h3>Saiba mais</h3>
                          <p>As informações pessoais que você optou por nos fornecer incluem normalmente os &nbsp;tipos de informações pessoais descritos abaixo. Revise as informações abaixo para saber mais sobre as categorias de informações pessoais que a Coca‑Cola coleta e porque são coletadas.</p>
                          <p><strong>Contato e informações de conta</strong></p>
                          <p>A Coca‑Cola solicita seu nome e sobrenome, endereço de e-mail ou número de telefone celular e data de nascimento para criar uma conta de Serviços. Também podemos coletar nome de usuário e senha, idade, endereço postal, identificação emitida pelo governo e informações de contato similares.</p>
                          <ul>
                            <li>Para manter a sua conta online, caso opte por criar uma</li>
                            <li>Para verificar a identidade e qualificação para determinados Serviços</li>
                            <li>Para personalizar sua experiência dos Serviços</li>
                            <li>Para oferecer acesso a conteúdos exclusivos, descontos e outras oportunidades</li>
                            <li>Para administrar um sorteio, concurso, outra promoção ou um programa de fidelidade</li>
                            <li>Para concluir uma compra e entregar os produtos</li>
                            <li>Para enviar informações que acreditamos que lhe interessarão, por vezes personalizadas com base nas informações associadas à sua conta</li>
                            <li>Para pedir a sua opinião, como por meio de uma pesquisa sobre um novo produto</li>
                            <li>Para responder às suas perguntas e prestar atendimento ao cliente</li>
                            <li>Para fins de pesquisa e inovação</li>
                            <li>Quando você participa de um evento presencial, como eventos patrocinados ou realizados pela Coca‑Cola ou amostragem de produtos</li>
                          </ul>
                          <p><strong>Conteúdo Gerado pelo Usuário (UGC, User Generated Content)</strong></p>
                          <p>A Coca‑Cola coleta as postagens, comentários, opiniões, gravações de voz, fotos e vídeos que você decidir enviar através dos Serviços &nbsp;</p>
                          <ul>
                            <li>Para monitorar as comunidades online</li>
                            <li>Para registrar e agir com base em seus comentários e opiniões, tais como em pesquisas, consultas de atendimento ao cliente e outras caixas de texto de formato livre</li>
                            <li>Para administrar sua participação em promoções que incluem o envio de UGC</li>
                            <li>Para coletar fotos de usuários relacionadas com a participação em promoções específicas ou outros Serviços</li>
                          </ul>
                          <p><strong>Informações associadas a uma conta em uma plataforma de mídia social</strong></p>
                          <p>Quando você se conecta ou entra nos Serviços através de sua conta de rede social, como Meta e Twitter, coletamos as informações pessoais permitidas pela plataforma de rede social e as permissões de sua conta, tais como foto do perfil, e-mail, gostos e interesses, além de amigos, seguidores ou listas similares. &nbsp;</p>
                          <ul>
                            <li>Para personalizar sua experiência dos Serviços</li>
                            <li>Para responder aos seus comentários e consultas postados em uma plataforma de rede social e analisar comunicações (como tweets ou posts) com ou sobre a Coca‑Cola para entender melhor como os consumidores enxergam a Coca‑Cola</li>
                          </ul>
                          <p><strong>Dados de localização</strong></p>
                          <p>Geolocalização precisa (GPS) quando autorizada através do sistema operacional de um dispositivo móvel</p>
                          <p>Localização aproximada de um endereço IP ou conexões a Wi-Fi, Bluetooth ou um serviço de rede sem fio, coletada automaticamente quando você usa os Serviços &nbsp;</p>
                          <ul>
                            <li>Para personalizar sua experiência dos Serviços</li>
                            <li>Para que você saiba quando produtos, promoções ou eventos estão disponíveis perto de você, ou permitir que outros usuários vejam sua localização quando aceitar isso</li>
                            <li>Para enviar publicidade geograficamente relevante</li>
                          </ul>
                          <p><strong>Outras informações pessoais compartilhadas através dos Serviços</strong> &nbsp;</p>
                          <ul>
                            <li>Para administrar comunidades online</li>
                            <li>Para gerenciar promoções e outros recursos dos Serviços que permitam que você compartilhe suas informações pessoais</li>
                            <li>Coletar fotos de usuários relacionadas à participação em promoções específicas ou outros Serviços, como os refrigeradores inteligentes da Coca‑Cola</li>
                          </ul>
                          <p><strong>b.</strong> <strong>Informações sobre o uso de nossos aplicativos</strong></p>
                          <p>Quando você baixa e instala um de nossos aplicativos, as informações que coletamos dependem do sistema operacional e das permissões do seu dispositivo móvel. Nossos aplicativos precisam usar certos recursos e dados do seu dispositivo móvel para funcionar. Por exemplo, se você deseja uma experiência online perfeita para o aplicativo, precisamos coletar e vincular informações de seu navegador da web.</p>
                          <p>Para saber mais sobre as informações específicas coletadas por um aplicativo, verifique as configurações de seu dispositivo ou reveja as informações de permissões disponíveis na plataforma específica (por exemplo, Google Play e App Store) da qual você baixou o aplicativo. Certos aplicativos, em suas próprias configurações, também permitem que você verifique ou altere seu status para certas coletas de dados. Se você mudar suas configurações, certos recursos do aplicativo podem não funcionar adequadamente.</p>
                          <p>Para interromper a coleta de todas as informações através de um aplicativo, desinstale-o.</p>
                          <p><strong>c. Informações coletadas automaticamente durante o uso dos Serviços</strong></p>
                          <p>Coletamos automaticamente certas informações de e sobre o uso dos Serviços a partir dos computadores e dispositivos móveis dos usuários. Algumas informações coletadas automaticamente são consideradas informações pessoais sob certas leis. Estas informações são coletadas automaticamente usando cookies, pixel, web beacons e tecnologias similares de coleta de dados (coletivamente, <strong><i>tecnologias de coleta de dados</i></strong>).</p>
                          <h3>Saiba mais</h3>
                          <p>As informações que coletaremos automaticamente incluem: &nbsp;</p>
                          <ul>
                            <li>informações sobre seu computador ou dispositivo móvel, tais como tipo de dispositivo e número de identificação, tipo de navegador, provedor de serviços de internet, rede móvel e sistema operacional</li>
                            <li>Endereço IP e localização geográfica geral (por exemplo, localização em nível de país ou cidade)</li>
                            <li>como um computador ou dispositivo móvel interage com os Serviços, incluindo a data e a hora em que os Serviços são acessados, solicitações e resultados de busca, cliques de mouse e movimentos, páginas web específicas acessadas, links clicados e vídeos assistidos</li>
                            <li>medições de tráfego e utilização</li>
                            <li>dados sobre os sites ou serviços de terceiros acessados antes de interagir com os Serviços, que são utilizados para aumentar a relevância da publicidade para os usuários</li>
                            <li>interações com nossas comunicações de marketing, como por exemplo, se e quando &nbsp;um e-mail da Coca‑Cola é aberto.</li>
                          </ul>
                          <p><strong>d.</strong> <strong>Informações coletadas de terceiros</strong></p>
                          <p>De tempos em tempos, recebemos informações pessoais de terceiros que usamos para conhecer mais sobre nossos usuários, personalizar a sua experiência e promover e melhorar os Serviços de forma mais eficaz.</p>
                          <h3>Saiba mais</h3>
                          <p>Os tipos de informações pessoais que recebemos de terceiros são: &nbsp;</p>
                          <ul>
                            <li>Informações pessoais associadas a compras. <i>As compras com cartão de pagamento são realizadas por processadores de pagamento terceirizados. A Coca‑Cola não tem acesso aos números completos de contas bancárias, cartões de crédito ou de débito.</i></li>
                            <li>Informações pessoais disponibilizadas comercialmente por fornecedores de serviços de marketing ou coletadas por parceiros de marketing através de campanhas e eventos, que são utilizadas para ajudar a identificar indivíduos que possam estar interessados em saber mais sobre a Coca‑Cola e para complementar as informações pessoais que já temos</li>
                            <li>Informações pessoais que recebemos dos parceiros publicitários terceirizados que nos ajudam a oferecer publicidade mais relevante</li>
                            <li>Informações pessoais compartilhadas com a Coca‑Cola por parceiros engarrafadores</li>
                            <li>Informações pessoais de fontes disponíveis publicamente</li>
                            <li>Informações pessoais das autoridades policiais e outras autoridades governamentais (mas somente em casos raros)</li>
                          </ul>
                          <p>Podemos combinar as informações que a Coca‑Cola tem sobre você ou combinar dados provenientes de terceiros. Exigimos que cada fornecedor de dados de terceiros confirme que o compartilhamento de informações pessoais com a Coca‑Cola é transparente para os consumidores e lícito.</p>
                          <p><strong>e.&nbsp;Outras informações coletadas com seu consentimento</strong></p>
                          <p>Podemos solicitar seu consentimento para coletar tipos específicos de informações pessoais de modo que você possa participar de novas atividades, receber conteúdo exclusivo ou testar novos recursos. De acordo com algumas leis de privacidade, a Coca‑Cola é obrigada a obter o consentimento antes de coletar e usar informações pessoais. Consulte a <a href="#9">Seção 9</a> para mais detalhes.</p>
                          <h3>4. COMO A COCA-COLA USA AS INFORMAÇÕES PESSOAIS?&nbsp;</h3>
                          <p>A Coca‑Cola também utiliza as informações pessoais para fornecer e melhorar os Serviços, administrar nossos negócios, proteger os usuários e fazer valer nossos direitos legais.</p>
                          <h3>Saiba mais</h3>
                          <p>Utilizamos informações pessoais para fornecer, personalizar e melhorar os Serviços (em cada caso, conforme permitido pela legislação aplicável), inclusive: &nbsp;</p>
                          <ul>
                            <li>para criar e atualizar as contas dos usuários e atender as solicitações desses usuários</li>
                            <li>para centralizar as informações pessoais dos consumidores em um banco de dados controlado por um terceiro em nosso nome e anexar as informações coletadas de terceiros</li>
                            <li>para enviar comunicações de marketing e outras para os usuários</li>
                            <li>para permitir as comunicações entre usuários, como uma comunidade online</li>
                            <li>para publicidade direcionada (por vezes também chamada de publicidade personalizada ou baseada em interesse) com base nas informações geradas por uma atividade online do usuário, como por exemplo, visitar sites que contenham anúncios ou cookies de nossos parceiros publicitários, alguns dos quais se baseiam na geolocalização.</li>
                            <li>para saber mais sobre nossos usuários para podermos recomendar conteúdo que acreditamos que irá interessar a determinados usuários</li>
                            <li>para promoção e administração de programas de fidelidade</li>
                            <li>para atendimento ao cliente</li>
                            <li>para analisar a forma como os usuários interagem com os Serviços e as tendências de atividades para que possamos desenvolver novas funcionalidades e conteúdo que atendam às expectativas de nossos consumidores</li>
                            <li>para melhorar os Serviços e a experiência dos usuários ao utilizá-los</li>
                            <li>para análise de dados, pesquisa, desenvolvimento de produtos e aprendizado de máquina que nos permitem entender melhor os nossos consumidores e oferecer-lhes inovações</li>
                            <li>para monitorar e testar os Serviços, incluindo a resolução de problemas operacionais</li>
                            <li>para criar dados anonimizados, que não estão sujeitos a esta Política de Privacidade, que são utilizados na melhoria dos produtos e serviços da Coca‑Cola e para fins comerciais similares e de outra forma permitidos por contrato e lei</li>
                            <li>para detectar e proteger contra fraude, uso abusivo e não autorizado dos Serviços</li>
                            <li>para gestão de risco e finalidades administrativas similares, como monitorar e fazer cumprir acordos de usuários e de outra forma cumprir as leis aplicáveis à Coca‑Cola</li>
                          </ul>
                          <h3>5.&nbsp;A COCA-COLA USA COOKIES E OUTRAS TECNOLOGIAS DE COLETA DE DADOS?</h3>
                          <p>Utilizamos cookies e outras tecnologias de coleta de dados para reconhecer você e/ou seu(s) dispositivo(s) quando você utiliza os Serviços e coletamos informações pessoais a seu respeito.</p>
                          <p><i>Alguns sites que fazem parte dos Serviços possuem avisos específicos sobre cookies e outras tecnologias de coleta de dados que se aplicam a sites e consumidores específicos. Se você visitar um site da Coca‑Cola com um aviso sobre cookies, então o aviso sobre cookies desse site se aplica</i>.</p>
                          <h3>Saiba mais</h3>
                          <p><strong>O que são cookies?</strong></p>
                          <p>Cookies são pequenos arquivos de texto enviados para ou acessados no seu navegador web ou no disco rígido do seu computador. Um cookie contém normalmente o nome do domínio (localização na internet) do qual o cookie se originou, a "vida útil" do cookie (ou seja, quando ele expira) e um número único gerado aleatoriamente ou um identificador similar. Um cookie também pode conter informações sobre o seu computador ou dispositivo, como por exemplo, configurações, histórico de navegação e atividades realizadas durante o uso dos Serviços.</p>
                          <p>A Coca‑Cola também usa "pixels" (também chamados de web beacons). Os pixels são imagens transparentes que podem coletar informações sobre leitura de e-mails e uso de sites em todos os sites e ao longo do tempo.</p>
                          <h3>Saiba mais</h3>
                          <p>Os cookies que a Coca‑Cola coloca nos Serviços são chamados de cookies primários. Os cookies definidos nos Serviços por qualquer outra parte são chamados de cookies de terceiros. Os cookies de terceiros permitem recursos ou funcionalidades de terceiros nos ou através dos Serviços, tais como automação de análises e de marketing. As partes que configuram cookies de terceiros podem reconhecer seu dispositivo quando você o utiliza para acessar os Serviços e também quando você o utiliza para visitar alguns outros sites. Para saber mais sobre cookies em geral, visite <a href="http://www.allaboutcookies.org/">www.allaboutcookies.org</a>.</p>
                          <p>Alguns navegadores web (incluindo Safari, Internet Explorer, Firefox e Chrome) incorporam um “Do Not Track” (<strong><i>DNT</i></strong>, não rastrear) ou recurso similar que sinaliza aos sites que um usuário não quer que sua atividade e comportamento online sejam rastreados. Se um site que responde a um determinado sinal DNT recebe esse sinal, o navegador impede que esse site colete certas informações no cache do navegador. Nem todos os navegadores oferecem uma opção DNT e os sinais DNT ainda não são uniformes. Por esta razão, muitos operadores de sites, incluindo a Coca‑Cola, ainda não respondem aos sinais DNT.</p>
                          <p><strong>Por que a Coca‑Cola utiliza cookies e outras tecnologias de coleta de dados?</strong></p>
                          <p>Alguns cookies são necessários para o funcionamento dos Serviços. Outros cookies nos permitem rastrear os interesses dos usuários visando a publicidade direcionada e a melhoria da experiência no uso dos Serviços.</p>
                          <h3>Saiba mais</h3>
                          <p>Os tipos de cookies atendidos através dos Serviços e o motivo pelo qual são utilizados são os seguintes: &nbsp;</p>
                          <ul>
                            <li><strong>Cookies estritamente necessários</strong> são essenciais para que os Serviços funcionem.</li>
                            <li><strong>Cookies de desempenho ou análise</strong> coletam informações sobre o modo como os Serviços são utilizados para que possamos analisar e melhorar esses Serviços. Os cookies de desempenho ou análise costumam permanecer em seu computador após você fechar o navegador, até você os deletar.</li>
                            <li><strong>Cookies de publicidade</strong> são utilizados para tornar as mensagens publicitárias mais relevantes para você, ajudando-nos a exibir anúncios baseados em seus interesses inferidos, impedindo que o mesmo anúncio apareça com demasiada frequência e assegurando aos anunciantes a exibição adequada das mensagens publicitárias.</li>
                            <li><strong>Cookies de redes sociais</strong> permitem aos usuários interagir mais facilmente com as plataformas de rede social. Nós não controlamos os cookies das redes sociais e eles não nos permitem ter acesso às suas contas de redes sociais sem a sua permissão. Consulte a política de privacidade da plataforma de rede social pertinente para obter informações sobre os cookies utilizados.</li>
                          </ul>
                          <p>A tecnologia de coleta de dados permite à Coca‑Cola monitorar os padrões de tráfego de uma página da web para outra, entregar ou se comunicar com cookies, entender se os usuários visitam os Serviços depois de ver nosso anúncio online exibido em um site de terceiros, melhorar o desempenho dos Serviços e medir o sucesso de nossas campanhas de marketing por e-mail. As Políticas de Cookies da Coca‑Cola (disponíveis em certas jurisdições) descrevem o uso da tecnologia de coleta de dados pela Coca‑Cola.</p>
                          <p>Onde for permitido pela legislação aplicável, os Serviços usam o Google Analytics para publicidade direcionada (a que o Google às vezes se refere como "remarketing"). O Google usa cookies que ele reconhece quando os consumidores visitam vários sites. Os dados coletados através dos cookies do Google ajudam a Coca‑Cola a analisar como os Serviços são utilizados e, para alguns Serviços e em algumas jurisdições, a personalizar as comunicações de marketing e a publicidade digital.</p>
                          <p>Os Serviços também incorporam vídeos do YouTube (uma empresa do Google) através do enquadramento. Isso significa que, após clicar no botão para reproduzir um vídeo do YouTube através dos Serviços, é estabelecida uma conexão entre os Serviços e os servidores do YouTube. Em seguida, um link HTML fornecido pelo YouTube é inserido no código dos Serviços para criar um enquadramento da reprodução. O vídeo armazenado nos servidores do YouTube é então reproduzido pelo enquadramento dos Serviços. O YouTube também recebe informações que informam a ele que você está usando os Serviços no momento: seu endereço IP, informações sobre o navegador, o sistema operacional e as configurações do dispositivo que você está usando, o URL da página web atual, páginas web visitadas anteriormente se você tiver seguido um link, e os vídeos que você assistiu. Se você estiver logado em sua conta no YouTube, as informações podem estar associadas ao seu perfil de usuário nesta plataforma. Você pode impedir esta associação fazendo logout de sua conta no YouTube antes de usar os Serviços e eliminando os cookies correspondentes.</p>
                          <p>Para mais informações sobre como o Google coleta, usa e compartilha suas informações, visite a <a href="https://policies.google.com/privacy">Política de Privacidade do Google</a>.</p>
                          <p>Para mais informações sobre como o Google usa cookies em publicidade, visite a página de <a href="https://policies.google.com/technologies/ads">Publicidade</a> do Google.</p>
                          <p>Para impedir o Google Analytics de usar seus dados, você pode instalar o <a href="https://tools.google.com/dlpage/gaoptout">complemento de navegador do Google para recusa</a>.</p>
                          <p>Para recusar anúncios no Google que são direcionados aos seus interesses, use suas&nbsp;<a href="https://adssettings.google.com/">configurações do Google Ads</a>.</p>
                          <p>Se você estiver localizado no EEE, Suíça ou Reino Unido, observe em particular que, se você permitir os cookies do Google no Centro de Preferências de Privacidade da Coca‑Cola, as informações geradas por esses cookies sobre o uso dos Serviços são transmitidas para o Google e por ele armazenadas em servidores nos Estados Unidos. A Coca‑Cola utilizou ferramentas tecnológicas, incluindo a ferramenta de anonimização de IP do Google, para excluir a última parte de seu endereço IP antes que os dados fossem transferidos pelo Google para os Estados Unidos, bem como as ferramentas do Google para desativação do compartilhamento de dados e sinais do Google e configurações de identificação do usuário no Google Analytics para determinadas jurisdições. O Google não associará um endereço IP a nenhum outro dado mantido pelo Google.</p>
                          <p>Em nome da Coca‑Cola, o Google utilizará os dados descritos acima para compilar relatórios que ajudem a Coca‑Cola a operar e fornecer os Serviços.</p>
                          <p><strong>Suas opções de Cookies</strong></p>
                          <p>Você tem o direito de decidir se aceita ou rejeita cookies. Você pode configurar seu navegador para recusar todos os cookies ou para indicar quando um cookie estiver configurado. (A maioria dos navegadores aceita cookies automaticamente, mas permite que você os desabilite, rcontudo, reforçamos que caso os cookies sejam desabilitados, alguns recursos dos Serviços podem não funcionar corretamente ).</p>
                          <p>Como foi observado acima, o Google desenvolveu um complemento de navegador com opção de exclusão dos cookies usados para o Google Analytics. Você pode baixar e instalar o complemento para seu navegador web <a href="https://tools.google.com/dlpage/gaoptout">aqui</a>.&nbsp;Você pode recusar o uso desses cookies, selecionando as configurações apropriadas em seu navegador.</p>
                          <p>Certas jurisdições também têm políticas de cookies diferentes e complementares a esta Política de Privacidade, bem como ferramentas para gerenciar cookies. Consulte a <a href="#9">Seção 9</a> para saber mais detalhes.</p>
                          <h3>6.&nbsp;COMO A COCA-COLA COMPARTILHA AS INFORMAÇÕES PESSOAIS?</h3>
                          <p>A Coca‑Cola compartilha informações pessoais com pessoas e empresas que ajudam a operar os Serviços e realizar nossos negócios e quando somos legalmente autorizados ou obrigados a fazê-lo. Também compartilhamos informações pessoais quando um usuário solicita que nós o façamos. Exigimos que os destinatários de nossas informações pessoais respeitem esta Política de Privacidade, a menos que e até que os usuários estejam cientes de que uma política ou aviso de privacidade diferente seja aplicado.</p>
                          <h3>Saiba mais</h3>
                          <p>A Coca‑Cola compartilha informações pessoais com as seguintes categorias de destinatários: &nbsp;</p>
                          <ul>
                            <li>Consultores profissionais, como advogados, contadores, seguradoras e especialistas em segurança da informação e forense;</li>
                            <li>Fornecedores de marketing que ajudam a promover os Serviços (como marketing por e-mail) e de tempos em tempos complementam as informações pessoais que já possuímos. Por exemplo, a Meta recebe e utiliza certos dados relacionados ao uso dos Serviços para nos ajudar a entregar publicidade personalizada em sua plataforma e avaliar a eficácia desta publicidade;</li>
                            <li>Prestadores de serviços para que possam realizar serviços em nosso nome, incluindo análise de dados, segurança de dados, operações de comércio eletrônico, pesquisas de opinião, pesquisa, administração de promoções, ofertas e programas de fidelidade e, de outra forma, para nos ajudar a conduzir nossos negócios. Alguns desses prestadores de serviços têm responsabilidades globais;</li>
                            <li>Provedores de armazenamento na nuvem;</li>
                            <li>Compradores ou investidores potenciais ou atuais e seus consultores profissionais em conexão com qualquer fusão, aquisição ou investimento real ou proposto em ou de toda ou qualquer parte de nossos negócios. Dedicaremos nossos melhores esforços para garantir que os termos desta Política de Privacidade se apliquem às informações pessoais após a transação ou que os usuários recebam aviso prévio de mudanças no processamento de informações pessoais;</li>
                            <li>Afiliadas e parceiros engarrafadores da Coca‑Cola;</li>
                            <li>Aplicação competente da lei, agências reguladoras governamentais e tribunais quando acreditarmos que a divulgação é necessária (i) para cumprir a lei, (ii) para exercer, estabelecer ou defender direitos legais, ou (iii) para proteger os interesses vitais dos usuários, parceiros comerciais, prestadores de serviços ou outro terceiro;</li>
                            <li>Outros terceiros com a sua permissão.</li>
                          </ul>
                          <p>Se compartilharmos informações pessoais, exigimos que os destinatários tratem as informações pessoais em conformidade com esta Política de Privacidade e com nossos requisitos de confidencialidade e segurança.</p>
                          <h3>7.&nbsp;COMO A COCA-COLA PROTEGE AS INFORMAÇÕES PESSOAIS?</h3>
                          <p>A Coca‑Cola se preocupa em assegurar e salvaguardar as informações pessoais que nos são confiadas. Usamos uma série de medidas para nos ajudar a proteger as informações pessoais contra acesso e uso não autorizados.</p>
                          <h3>Saiba mais</h3>
                          <p>A Coca‑Cola utiliza medidas de proteção técnica, física e administrativa destinadas a proteger as informações pessoais que processamos. Nossas medidas de proteção são projetadas para fornecer um nível de segurança adequado ao risco de processamento de suas informações pessoais e incluem (conforme aplicável) medidas para garantir a confidencialidade, integridade, disponibilidade e resiliência contínua dos sistemas de processamento e um procedimento para testar, verificar e avaliar regularmente a eficácia das medidas técnicas e organizacionais necessárias para garantir a segurança do processamento de informações pessoais. A Coca‑Cola não pode, contudo, eliminar totalmente os riscos de segurança associados ao processamento de informações pessoais.</p>
                          <p>Você é responsável por manter a segurança das credenciais da sua conta. A Coca‑Cola tratará o acesso aos Serviços através das credenciais da sua conta como sendo autorizado por você.</p>
                          <p>A Coca‑Cola pode suspender seu uso de todos ou parte dos Serviços sem aviso prévio se suspeitarmos ou detectarmos qualquer violação de segurança. Se você acredita que as informações que forneceu à Coca‑Cola ou que a sua conta não são mais seguras, entre em contato conosco imediatamente pelo e-mail Privacy@coca-cola.com.</p>
                          <p>Se tomarmos conhecimento de uma violação que afete a segurança de suas informações pessoais, nós lhe notificaremos, conforme exigido pela legislação aplicável. Quando permitido pela legislação aplicável, a Coca‑Cola notificará você utilizando o endereço de e-mail associado à sua conta ou outro método permitido e igualmente associado à sua conta.</p>
                          <p>O ACESSO NÃO AUTORIZADO ÀS INFORMAÇÕES PESSOAIS E AOS SERVIÇOS, INCLUINDO O SCRAPING (RASPAGEM), É PROIBIDO E PODE LEVAR A PROCESSOS CRIMINAIS.</p>
                          <h3>8.&nbsp;POR QUANTO TEMPO A COCA-COLA RETÉM AS INFORMAÇÕES PESSOAIS?</h3>
                          <p>Retemos informações pessoais de um usuário enquanto a conta deste estiver ativa e enquanto for necessário para os propósitos descritos acima. Também retemos informações pessoais enquanto for necessário para cumprir com as obrigações legais, resolver litígios e fazer cumprir nossos acordos.</p>
                          <h3>Saiba mais</h3>
                          <p>Nossa intenção é manter suas informações pessoais precisas e atualizadas. Retemos as informações pessoais que processamos de acordo com esta Política de Privacidade, de acordo com nossa política de retenção de dados. Ao determinar o período de retenção, levamos em consideração vários critérios, tais como o tipo de produtos e serviços solicitados ou fornecidos a você, a natureza e a duração de nosso relacionamento com você e os períodos de retenção obrigatória nos termos da legislação aplicável. Ao final do período de retenção correspondente, ou apagamos ou anonimizamos informações pessoais ou, se não pudermos apagar ou anonimizar informações pessoais, então segregamos e armazenamos com segurança essas informações até que seja possível apagá-las ou anonimizá-las.</p>
                          <p>Assim que tornamos as informações pessoais anônimas, elas não são mais consideradas informações pessoais. Utilizamos dados anonimizados sujeitos à legislação e contratos aplicáveis.</p>
                          <h3>9.&nbsp;QUAIS SÃO AS OPÇÕES DISPONÍVEIS PARA AS INFORMAÇÕES PESSOAIS?</h3>
                          <p>Você pode fazer escolhas quanto ao manuseio de suas informações pessoais pela Coca‑Cola. Você pode exercer seus direitos de privacidade entrando em contato com a Coca‑Cola como descrito nesta Seção 9 ou usando várias ferramentas que a Coca‑Cola disponibiliza. Em alguns casos, sua capacidade de acessar ou controlar suas informações pessoais é limitada pela legislação aplicável.</p>
                          <p><strong>Preferências para dispositivos móveis</strong></p>
                          <p>Os sistemas operacionais dos dispositivos móveis e as plataformas de aplicativos (e.g., Google Play, App Store) possuem configurações de permissão para tipos específicos de dados e notificações de dispositivos móveis, tais como para acesso a contatos, serviços de geolocalização e notificações push. Você pode usar as configurações em seu dispositivo móvel para consentir ou negar a coleta de certas informações e/ou notificações push. Alguns aplicativos também podem ter configurações que permitem alterar as permissões e notificações push. Em alguns aplicativos, a mudança de configurações pode fazer com que certos aspectos do mesmo não funcionem adequadamente.</p>
                          <p>Você pode interromper toda a coleta de informações de um aplicativo, desinstalando esse aplicativo. Se você desinstalar o aplicativo, considere também a possibilidade de verificar as configurações de seu sistema operacional para confirmar que o identificador exclusivo e outras atividades associadas ao seu uso do aplicativo sejam excluídas de seu dispositivo móvel.</p>
                          <p><strong>Cancelamento dos e-mails e mensagens de texto da Coca‑Cola</strong></p>
                          <p>Para cancelar o recebimento de e-mails promocionais da Coca‑Cola, clique no link "Unsubscribe" (Descadastrar) na parte inferior do e-mail. Depois que você cancelar o recebimento, ainda podemos enviar-lhe comunicações não promocionais, como recibos de compras ou informações administrativas sobre sua conta.</p>
                          <p>As configurações de sua conta também podem permitir que você altere suas preferências de notificação, tais como notificações push de um aplicativo.</p>
                          <p>Caso deseje parar de receber mensagens de texto promocionais (SMS ou MMS), envie uma mensagem de texto de volta para a Coca‑Cola indicando que deseja parar de receber nossas mensagens de texto promocionais. Além disso, você pode nos comunicar conforme as instruções abaixo na seção "Fale conosco". Por favor, especifique que tipos de comunicações você não deseja mais receber e o número de telefone, endereço e/ou endereço de e-mail relevantes. Se você cancelar o recebimento de nossas mensagens de marketing, ainda podemos enviar-lhe mensagens administrativas importantes, como e-mails sobre suas contas ou compras.</p>
                          <p><strong>INFORMAÇÕES SOBRE DIREITOS DE PRIVACIDADE E OPÇÕES PARA JURISDIÇÕES ESPECÍFICAS SÃO FORNECIDAS NO FINAL DESTA POLÍTICA DE PRIVACIDADE. RECOMENDAMOS QUE REVISE AS SEÇÕES PERTINENTES.</strong></p>
                          <p>SE VOCÊ ESTIVER LOCALIZADO EM UMA JURISDIÇÃO COM LEIS DE PRIVACIDADE QUE LHE OFEREÇAM DIREITOS DE PRIVACIDADE NÃO DESCRITOS NESTA POLÍTICA DE PRIVACIDADE, QUEIRA ENTRAR EM CONTATO CONOSCO EM <a href="mailto:privacy@coca-cola.com">PRIVACY@COCA-COLA.COM</a>. Respeitamos seu direito à privacidade e faremos nosso melhor para atender as suas solicitações.</p>
                          <h3>10.&nbsp;COMO A COCA-COLA PROTEGE A PRIVACIDADE DAS CRIANÇAS?&nbsp;</h3>
                          <p>Alguns dos Serviços têm restrições de idade, o que significa que podemos fazer perguntas para verificar sua idade antes de permitir que utilize esses Serviços.</p>
                          <p>De acordo com a nossa <a href="https://www.coca-colacompany.com/policies-and-practices/responsible-marketing-policy">Política de Marketing Responsável</a>, a Coca‑Cola não direciona o marketing de nossos produtos para crianças menores de 13 anos. Da mesma forma, não coletamos informações pessoais online de crianças, a menos que seja permitido pela legislação aplicável. Se você tomar conhecimento de que uma criança nos forneceu informações pessoais sem o consentimento dos pais ou em desconformidade com a legislação aplicável, entre em contato com nosso Escritório de Privacidade em privacy@coca-cola.com. Após tomarmos conhecimento, tomaremos as providências para excluir as informações pessoais da criança, conforme exigido pela legislação aplicável.</p>
                          <h3>11.&nbsp;A COCA-COLA TRANSFERE INFORMAÇÕES PESSOAIS PARA OUTROS PAÍSES?</h3>
                          <p>A Coca‑Cola pode transferir informações pessoais para além das fronteiras para qualquer um dos lugares onde nós e nossos fornecedores e parceiros realizamos negócios. Esses outros lugares podem ter leis de proteção de dados diferentes (e, em alguns casos, menos protetoras) do que as leis de onde você reside.</p>
                          <p>Se suas informações pessoais forem transferidas para outros países por nós ou em nosso nome, usaremos medidas de proteção apropriadas para proteger suas informações pessoais, de acordo com esta Política de Privacidade e a legislação aplicável. Essas medidas de proteção incluem a concordância com cláusulas contratuais padrão ou contratos-modelo para transferências de informações pessoais entre as afiliadas da Coca‑Cola e entre nossos fornecedores e parceiros. Quando em vigor, esses contratos exigem que nossas filiais, fornecedores e parceiros protejam as informações pessoais, de acordo com as leis de privacidade aplicáveis.</p>
                          <p>Para solicitar informações sobre nossas cláusulas contratuais padrão ou outras medidas de proteção para transferências internacionais de informações pessoais, entre em contato com nosso Escritório de Privacidade em privacy@coca-cola.com.</p>
                          <h3>12.&nbsp;QUANDO ESTA POLÍTICA DE PRIVACIDADE É ALTERADA?</h3>
                          <p>Podemos atualizar esta Política de Privacidade de tempos em tempos para atender a mudanças legais, técnicas ou comerciais. A versão mais atual está sempre disponível através dos Serviços.</p>
                          <h3>Saiba mais</h3>
                          <p>Quando atualizarmos esta Política de Privacidade, publicaremos a versão mais recente e alteraremos a Data de Vigência acima. Também tomaremos as medidas cabíveis para informar você antecipadamente sobre mudanças significativas que acreditamos afetar seus direitos de privacidade, para que tenha a oportunidade de rever a Política de Privacidade revisada antes que ela seja efetivada. Se o seu consentimento for exigido pelas leis de privacidade aplicáveis, pediremos seu consentimento para alterações antes que a Política de Privacidade revisada se aplique a você. Confira regularmente esta Política de Privacidade para garantir que você esteja a par da versão mais recente.</p>
                          <h3>13.&nbsp;DIREITOS E OPÇÕES PARA JURISDIÇÕES ESPECÍFICAS</h3>
                          <h3>Residentes de países africanos</h3>
                          <p><strong><i>Residentes da África do Sul</i></strong>. As informações pessoais coletadas de você são necessárias para que tenha acesso aos Serviços. O não fornecimento dessas informações pessoais pode impedi-lo de acessar ou usar qualquer um ou todos os Serviços. Sob a Lei de Proteção de Informações Pessoais 4 de 2013 (<strong><i>POPIA</i></strong>), as informações pessoais de pessoas jurídicas também são protegidas; portanto, no caso de aplicativos ou sites serem acessados em nome de uma pessoa jurídica, as informações pessoais de tal pessoa jurídica devem ser protegidas.</p>
                          <p><i>Marketing direto:</i> Toda comunicação eletrônica de marketing direto será enviada a você (até que você opte por não receber) quando: &nbsp;</p>
                          <ul>
                            <li>você consentir em receber comunicação de marketing direto em conformidade com a POPIA; ou</li>
                            <li>recebermos suas informações pessoais em função da venda de qualquer de nossos produtos ou serviços a você para que possamos nos comunicar consigo sobre nossos outros produtos ou serviços. Você pode optar por não receber estas comunicações de marketing no momento, usando o link “unsubscribe” (cancelar subscrição) ou entrando em contato conosco através das informações de contato abaixo.</li>
                          </ul>
                          <p><i>Seus direitos</i>: Você tem o direito de fazer as seguintes solicitações sobre suas informações pessoais: &nbsp;</p>
                          <ul>
                            <li>perguntar se a Coca‑Cola detém informações pessoais a seu respeito, sem custos</li>
                            <li>solicitar um registro ou uma descrição de suas informações pessoais que a Coca‑Cola detém sobre você, de acordo com o processo estabelecido no Manual PAIA que pode ser consultado no site coca-cola.co.za.</li>
                            <li>solicitar que a Coca‑Cola atualize ou corrija informações pessoais imprecisas ou incompletas a seu respeito</li>
                            <li>solicitar que a Coca‑Cola deixe de usar suas informações pessoais por qualquer motivo</li>
                            <li>opor-se ao processamento de suas informações pessoais</li>
                            <li>solicitar que a Coca‑Cola apague suas informações pessoais</li>
                            <li>solicitar que a Coca‑Cola restrinja o modo de utilização de suas informações pessoais, compartilhadas ou processadas de qualquer outra forma</li>
                            <li>solicitar que a Coca‑Cola transmita uma cópia das suas informações pessoais para você ou para um terceiro selecionado</li>
                          </ul>
                          <p>Podemos (e, em alguns casos, somos obrigados a) verificar sua identidade antes de agirmos de atendermos a sua solicitação para exercer seus direitos de privacidade.</p>
                          <p><i>Como entrar em contato conosco para exercer seus direitos de privacidade:</i> Para exercer seus direitos de privacidade, entre em contato com a Coca‑Cola utilizando uma das seguintes opções: &nbsp;</p>
                          <ul>
                            <li>envie-nos um e-mail para o seguinte endereço: CCSAINFO@COCA-COLA.COM</li>
                            <li>ligue para 0860112526</li>
                            <li>escreva para o seguinte endereço postal: Coca‑Cola Africa (Proprietary) Limited, Oxford and Glenhove, 116 Oxford Road, Houghton Estate, Johannesburg, 2198, para atenção do Legal Team (Equipe Jurídica)</li>
                          </ul>
                          <p>Você tem o direito de apresentar uma reclamação junto ao órgão regulador da informação (África do Sul) via e-mail em <a href="mailto:POPIAComplaints@inforegulator.org.za">POPIAComplaints@inforegulator.org.za</a></p>
                          <p><i>Outros detalhes de processamento</i>: Também coletamos automaticamente as seguintes informações: &nbsp;</p>
                          <ul>
                            <li>Dados comportamentais: Informações derivadas da combinação da identificação do dispositivo e dos eventos do sistema que podem ser usadas para identificar tendências e padrões comportamentais e enviar-lhe comunicações de marketing relacionadas aos eventos dos quais você participou, sujeito a requisitos de marketing direto nos termos da POPIA, como a obtenção de seu consentimento prévio.</li>
                            <li>Dados de participação: Informações pessoais referentes à participação do envolvido em um torneio promocional, prêmio, pesquisa, promoção instantânea, concurso e outros tipos de promoções (por exemplo, tipo de promoção, data e hora da participação na promoção, resultado da participação na promoção, informações necessárias para a entrega do prêmio).</li>
                            <li>Informações analíticas: Podemos coletar dados analíticos, ou usar ferramentas analíticas de terceiros, como o Google Analytics, para nos ajudar a medir o tráfego e as tendências de uso dos Serviços e para entender melhor a demografia e os comportamentos de nossos usuários.</li>
                          </ul>
                          <p>Também permitimos que redes de publicidade on-line de terceiros, empresas de mídia social e outros serviços de terceiros coletem informações sobre o uso dos Serviços pelo usuário ao longo do tempo para que eles possam reproduzir ou exibir anúncios nos Serviços utilizados pelo usuário e em outros dispositivos que o usuário possa utilizar</p>
                          <p>Os Serviços podem incluir recursos de redes sociais, tais como o botão curtir no Meta, LinkedIn, Snapchat, Instagram, Twitter ou outros widgets. Essas empresas de rede social podem reconhecer o usuário e coletar informações sobre a sua visita aos Serviços, e podem gravar um cookie ou empregar outras tecnologias de rastreamento. As interações do usuário com esses recursos são regidas pelas políticas de privacidade das empresas sobre as quais não temos controle. Exibimos publicidade dirigida ao usuário através de plataformas de redes sociais, tais como Meta, Twitter, Google+ e outras, com o consentimento prévio do usuário. Meta, Twitter e Google têm programas de publicidade baseados em interesses que nos permitem direcionar anúncios para usuários que demonstraram interesse nos Serviços enquanto estavam na plataforma de rede social, ou para grupos de outros usuários que compartilham características semelhantes, por exemplo, prováveis interesses comerciais e demográficos. Estes anúncios são regidos pelas políticas de privacidade das empresas de redes sociais que os fornecem.</p>
                          <p>Em alguns dos Serviços, utilizamos ferramentas de terceiros para monitorar informações sobre a experiência do usuário. Essas ferramentas coletam automaticamente informações sobre o uso, incluindo cliques e movimentos do mouse, rolagem de páginas e qualquer texto digitado nos formulários do site. Entre as informações coletadas não constam senhas, detalhes de pagamento ou outras informações pessoais confidenciais. Usamos essas informações para análise de dados do site, otimização e aperfeiçoamento da usabilidade do site. Não permitimos que essas informações sejam compartilhadas com terceiros ou por eles utilizadas para finalidades próprias.</p>
                          <p>Nossos fornecedores de publicidade online e por e-mail podem usar pixel tags, web beacons, GIFs transparentes ou outras tecnologias similares em conexão com os Serviços para ajudar a gerenciar nossas campanhas de publicidade online e por e-mail e fortalecer a eficácia de tais campanhas. Por exemplo, se um fornecedor tiver colocado um cookie exclusivo no computador do usuário, o fornecedor poderá usar pixel tags, web beacons, GIFs transparentes ou outras tecnologias similares para reconhecer o cookie durante a visita do usuário aos Serviços e para saber qual de nossos anúncios online pode ter levado o usuário aos Serviços, e o fornecedor poderá nos fornecer outras informações do mesmo tipo para nosso uso. Podemos vincular essas outras informações fornecidas por nossos fornecedores a informações pessoais sobre o usuário que tenhamos coletado anteriormente.</p>
                          <p>Podemos utilizar empresas de publicidade de terceiros para veicular anúncios nos Serviços. Essas empresas podem usar informações (não incluindo o nome, endereço, e-mail ou número de telefone) sobre as visitas do usuário aos Serviços para fornecer anúncios sobre produtos e serviços de interesse do mesmo.</p>
                          <p>Podemos vincular ou combinar as atividades do usuário e as informações coletadas do usuário através dos Serviços com as informações que coletamos automaticamente por tecnologias de rastreamento. Isso nos permite proporcionar ao usuário uma experiência personalizada, independentemente de como ele interage conosco através dos Serviços. &nbsp;</p>
                          <ul>
                            <li><i>Residentes do Quênia</i> Como previsto para os indivíduos no Quênia, os Serviços não coletam, armazenam ou leem os dados de localização por GPS, Wi-Fi ou triangulação de redes sem fio. Um ID de aplicativo anônimo e gerado aleatoriamente é coletado e usado para detectar a proximidade do usuário aos pontos de venda e enviar mensagens promocionais específicas do local e descontos oferecidos em locais próximos.</li>
                          </ul>
                          <h3>Residentes da Argentina</h3>
                          <p>A Agência de Acesso à Informação Pública, em seu papel de Órgão Regulador da Lei 25.326, é responsável por receber reclamações e relatos de residentes da Argentina que acreditam que seus direitos de privacidade foram violados.</p>
                          <p>O titular dos dados pessoais tem o direito de exercer o direito de acesso em intervalos não inferiores a seis meses, a menos que seja demonstrado um interesse legítimo para este fim, de acordo com o artigo 14, parágrafo 3 da Lei No. 25.326.</p>
                          <p>As partes interessadas podem exercer seu direito de acesso, retificação ou exclusão enviando uma solicitação para: Servicios y Productos para Bebidas Refrescantes SRL – Vedia 4090 – C.A.B.A. – Argentina- Attn: Responsable de Bases de Datos.</p>
                          <p>As pessoas físicas devem anexar uma cópia de seu Documento Nacional de Identidade e os Representantes Legais devem anexar a documentação que comprove a validade da representação legal. Cada solicitação deve explicitar a sua motivação. A Coca‑Cola responderá a um pedido de acesso dentro de dez (10) dias corridos e para pedidos de retificação, atualização ou exclusão de dados pessoais, a Coca‑Cola responderá dentro de cinco (5) dias úteis.</p>
                          <h3>Residentes da Austrália</h3>
                          <p>Embora suas informações pessoais sejam geralmente armazenadas em um banco de dados central de consumidores em servidores localizados na Austrália, a Coca‑Cola também pode armazenar suas informações pessoais nos sistemas de nossas afiliadas e fornecedores em outros países, tais como Estados Unidos da América, Nova Zelândia, Cingapura e outros, conforme necessário de tempos em tempos.</p>
                          <p>Exigimos que terceiros que armazenam informações pessoais cumpram as leis de privacidade australianas e esta Política de Privacidade, e que usem suas informações pessoais somente para os fins aos quais as mesmas foram fornecidas.</p>
                          <p>Se você quiser acessar ou corrigir suas informações pessoais ou tiver dúvidas ou preocupações com relação a esta Política de Privacidade ou se estiver preocupado que sua privacidade possa ter sido violada, entre em contato conosco por qualquer um dos seguintes meios:</p>
                          <p>E-mail: privacyofficerau@coca-cola.com Telefone: Ligue para nossa Central de Informações ao Consumidor em 1800 025 123 (na Austrália) Correio: Attn: Privacy Officer Coca Cola South Pacific Pty Limited GPO Box 388 North Sydney, NSW 2059 On-line: Use a seção “Fale conosco” em&nbsp;<a href="https://cokeurl.com/ofdogj">www.coca-cola.com.au</a>&nbsp;e indique se a sua solicitação está relacionada com “privacidade”.</p>
                          <p>Responderemos você assim que pudermos e em qualquer caso até 30 dias após o recebimento de sua solicitação inicial.</p>
                          <p>Se a Coca‑Cola tiver boas razões para não honrar sua solicitação referente às suas informações pessoais, daremos a você uma explicação por escrito e os mecanismos que você pode seguir se desejar reclamar da recusa.</p>
                          <p>O controlador de suas informações pessoais é:</p>
                          <p>Coca Cola South Pacific Pty Limited E-mail: privacyofficerau@coca-cola.com Telefone: Ligue para nossa Central de Informações ao Consumidor em 1800 025 123 (na Austrália) Correio: Attn: Privacy Officer Coca Cola South Pacific Pty Limited GPO Box 388 North Sydney, NSW 2059</p>
                          <p>O órgão regulador de privacidade dos dados é:</p>
                          <p>Office of the Australian Information Commissioner Correio: GPO Box 5218 Sydney NSW 2001 Endereço: 175 Pitt Street Sydney NSW 2000 Tel: 1300 363 992 Fax: 61 2 9284 9666 E-mai: <a href="mailto:foi@oaic.gov.au">foi@oaic.gov.au</a> Website: <a href="https://www.oaic.gov.au/">https://www.oaic.gov.au/</a></p>
                          <h3>Residentes do Brasil</h3>
                          <p>Seus direitos de privacidade sob a LGPD estão descritos em&nbsp;<a href="https://cokeurl.com/3vyz08">https://privacidade.cocacola.com.br/#direitos</a></p>
                          <p>Para exercer seus direitos de privacidade, &nbsp;</p>
                          <ul>
                            <li>Preencha o formulário em <a href="https://privacyportal.onetrust.com/webform/e3ab7adf-beb9-4769-844e-c1ec4e6d17bb/draft/1a9a67ec-c303-4656-866b-49adf43d1b16">Brazil data subject request</a>&nbsp;ou;
                            </li>
                            <li>Envie um e-mail para <a href="mailto:encarregado.lgpd@coca-cola.com">encarregado.lgpd@coca-cola.com</a> ou;
                            </li>
                            <li>Envie uma notificação por correio para Praia de Botafogo, 374, Botafogo, Rio de Janeiro/RJ, CEP: 22.250-907, attn: Larissa Lourenço</li>
                          </ul>
                          <p>O controlador de suas informações pessoais é a Recofarma Indústria do Amazonas Ltda.</p>
                          <p>O órgão regulador da proteção de dados é a Autoridade Nacional de Proteção de Dados, <a href="https://www.gov.br/anpd/pt-br">https://www.gov.br/anpd/pt-br</a>.</p>
                          <p>Para seus sites direcionados aos residentes do Brasil, a Coca‑Cola tem uma política de cookies independente desta Política de Privacidade. Confira o site relevante da Coca‑Cola.</p>
                          <h3>Residentes dos Estados Unidos (CA, CO, CT, UT, VA)</h3>
                          <p><strong><i>Residentes da Califórnia.</i></strong> Este Aviso de Privacidade da Califórnia (<strong><i>California Privacy Notice</i></strong> ) se aplica ao processamento realizado pela Coca‑Cola de informações pessoais dos residentes do estado norte-americano da Califórnia (<strong><i>Consumidores da Califórnia</i></strong>) conforme exigido pela Lei de Privacidade do Consumidor da Califórnia de 2018, conforme emendada (<strong><i>CCPA</i></strong>).</p>
                          <p>Caso você seja um Consumidor da Califórnia, este Aviso de Privacidade da Califórnia foi concebido para lhe ajudar a compreender as categorias de informações pessoais que coletamos sobre você, onde obtemos essas informações pessoais, por que as processamos, com quem as compartilhamos e os direitos que você tem de conhecer e controlar suas informações pessoais. Se este Aviso de Privacidade da Califórnia e qualquer disposição no restante de nossa Política de Privacidade conflitarem, então este Aviso de Privacidade da Califórnia controla o processamento de informações pessoais dos Consumidores da Califórnia. Este Aviso de Privacidade da Califórnia não se aplica aos funcionários, prestadores de serviços, trabalhadores contingentes, ou candidatos a emprego da Coca‑Cola.</p>
                          <p><i>Aviso na coleta</i></p>
                          <p>Para fins da CCPA, a Coca‑Cola geralmente atua como um “negócio” no que diz respeito às suas informações pessoais. Um Negócio é semelhante a um Controlador de Dados, o que significa que a Coca‑Cola determina como e por que as informações pessoais que a Coca‑Cola coleta de você ou sobre você são tratadas.</p>
                          <p>Este Aviso na Coleta de informações pessoais descreve nossas práticas de coleta dessas informações quando atuamos como Negócio, incluindo uma lista das categorias de informações pessoais que coletamos, as finalidades para as quais coletamos informações pessoais e as fontes das quais coletamos informações pessoais.</p>
                          <p>Embora já expliquemos acima nesta Política de Privacidade quais são as informações pessoais que coletamos e por que razão, a CCPA exige que façamos certas divulgações usando as categorias de informações pessoais usadas na definição de informações pessoais da CCPA.</p>
                          <p>Categoria: identificadores Fonte: Diretamente de você Finalidade: Execução dos Serviços de Publicidade e Marketing Terceiros: Prestadores de serviços, incluindo fornecedores de marketing, afiliadas e parceiros engarrafadores, outros terceiros</p>
                          <p>Categoria: As categorias de informações pessoais listadas no California Customer Records statute (Cal. Civ. Code § 1798.80(e)) Fonte: Diretamente de você Finalidade: Execução dos Serviços de Publicidade e Marketing Terceiros: Prestadores de serviços, incluindo fornecedores de marketing, afiliadas e parceiros engarrafadores, outros terceiros</p>
                          <p>Categoria: Características de classificação protegidas pela lei da Califórnia ou pela lei federal Fonte: Diretamente de você Finalidade: Execução dos Serviços de Publicidade e Marketing Terceiros: Prestadores de serviços, incluindo fornecedores de marketing, afiliadas e parceiros engarrafadores, outros terceiros</p>
                          <p>Categoria: Informação comercial Fonte: Diretamente de você Finalidade: Execução dos Serviços Terceiros: Prestadores de serviços, incluindo fornecedores de marketing, afiliadas e parceiros engarrafadores, outros terceiros</p>
                          <p>Categoria: Informações biométricas, que são informações sobre suas características fisiológicas, biológicas ou comportamentais Fonte: A Coca‑Cola não coleta essas informações a partir da Data de Vigência Finalidade: A Coca‑Cola não coleta essas informações a partir da Data de Vigência Terceiros: A Coca‑Cola não coleta essas informações a partir da Data de Vigência</p>
                          <p>Categoria: Internet ou outra atividade de rede eletrônica Fonte: Diretamente de você, coletado automaticamente durante o uso dos Serviços Finalidade: Execução dos Serviços Terceiros: Prestadores de serviços, incluindo fornecedores de marketing, afiliadas e parceiros engarrafadores, outros terceiros</p>
                          <p>Categoria: Dados de geolocalização Fonte: Diretamente de você, coletado automaticamente durante o uso dos Serviços Finalidade: Execução dos Serviços Terceiros: Prestadores de serviços, outros terceiros</p>
                          <p>Categoria: Informações sonoras, eletrônicas, visuais ou similares Fonte: Diretamente de você Finalidade: Execução dos Serviços Terceiros: Prestadores de serviços</p>
                          <p>Categoria: Informações profissionais ou relacionadas ao emprego Fonte: Diretamente de você, de terceiros Finalidade: Execução dos Serviços, Publicidade e Marketing Terceiros: Prestadores de serviços, incluindo fornecedores de marketing, Afiliadas e parceiros engarrafadores</p>
                          <p>Categoria: Inferências extraídas de outras categorias para criar um perfil sobre um consumidor da Califórnia Fonte: Coca‑Cola Finalidade: Publicidade e Marketing Terceiros: Prestadores de serviços, incluindo fornecedores de marketing, afiliadas e parceiros engarrafadores, outros terceiros</p>
                          <p>Quando coletamos informações precisas de geolocalização para fins de execução de um Serviço solicitado por você, considera-se que estamos coletando dados “sensíveis” de acordo com a lei da Califórnia. O uso que fazemos desses dados para executar um Serviço solicitado por você é consistente com os propósitos comerciais permitidos no California Civil Code § 1798.100 <i>et seq</i>. e nas normas de implementação.</p>
                          <p>Embora tenhamos divulgado informações pessoais a terceiros, não temos conhecimento real de que tenhamos vendido ou compartilhado tais informações sobre alguém com menos de 16 anos de idade.</p>
                          <p><i>Seus Direitos de Privacidade do Consumidor da Califórnia</i></p>
                          <p>A CCPA oferece aos consumidores da Califórnia os seguintes direitos de privacidade fundamentais:</p>
                          <ul>
                            <li><i>Direito de acessar as informações</i>: Você tem o direito de solicitar acesso às informações pessoais coletadas sobre você e informações relativas à fonte dessas informações, às finalidades para as quais as coletamos e aos terceiros e prestadores de serviços com os quais as compartilhamos.</li>
                            <li><i>Direito a solicitar exclusão</i>: Você tem o direito de solicitar que façamos a exclusão de certas informações pessoais que tenhamos coletado sobre você.</li>
                            <li><i>Direito à correção</i>: Você tem o direito de corrigir informações pessoais imprecisas a seu respeito. Observe que os pedidos de correção estão sujeitos a certas limitações, e podemos optar por excluir em vez de corrigir suas informações pessoais em algumas circunstâncias.</li>
                            <li>
                              <i>Direito de optar pela não venda de informações pessoais a terceiros</i>: Nossa divulgação de suas informações pessoais a terceiros fornecedores de publicidade e análises pode constituir uma venda sob certas leis estaduais e, na Califórnia, também pode constituir "compartilhamento" (que é um termo usado para abordar o compartilhamento de informações para fins publicitários). Na medida em que nosso uso constitua uma venda ou compartilhamento de suas informações pessoais, você tem o direito de optar pela exclusão (a) permitindo um sinal de preferência de exclusão ou Controle de Privacidade Global em seu navegador, que é reconhecido por nossos sites voltados para os EUA, (b) opção de exclusão de cookies no centro de preferência de cookies de nossos sites voltados para os EUA, ou (c) envio de uma solicitação de exclusão em <a href="https://cokeurl.com/0y7811">https://us.coca-cola.com/dsrform</a>.
                            </li>
                            <li><i>Direito contra a discriminação</i>: Não discriminaremos você por exercer seus direitos nos termos da CCPA. Não lhe recusaremos bens ou serviços pelo exercício de seus direitos, não cobraremos um preço ou tarifas diferentes por bens ou serviços, inclusive através da concessão de descontos ou outros benefícios, nem iremos impor penalidades por você ter exercido seus direitos; não lhe forneceremos um nível ou qualidade diferente de bens ou serviços porque você exerceu seus direitos; nem sugeriremos que você possa receber um preço ou tarifa diferente para bens ou serviços ou um nível ou qualidade diferente de bens ou serviços como resultado do exercício de seus direitos.</li>
                          </ul>
                          <p>Para enviar uma solicitação no sentido de exercer seus direitos de privacidade na Califórnia, pedimos que:</p>
                          <p>o clique <a href="https://us.coca-cola.com/privacy-policy#rights">aqui</a></p>
                          <p>o ligue grátis para 1-800-438-2653</p>
                          <p>o envie um e-mail em:&nbsp;<a href="https://cokeurl.com/ytwrpf">https://us.coca-cola.com/support/contact-us/</a></p>
                          <p>Para enviar sua solicitação, esteja preparado com seu nome, endereço de e-mail e local de residência. Você pode autorizar outra pessoa (seu <strong><i>agente</i></strong>) a enviar uma solicitação em seu nome.</p>
                          <p>Nosso objetivo é atender as solicitações o mais rápido possível e de acordo com as leis aplicáveis. Saiba que pode levar mais tempo para verificar e atender as solicitações enviadas por agentes. Se você tem uma conta conosco, você também pode fazer certas alterações diretamente através da página de perfil de sua conta. Observe que as alterações que você faz na página de perfil de sua conta através dos Serviços podem não se refletir sempre em partes dos Serviços operados por nós.</p>
                          <p>Observe que: &nbsp;</p>
                          <ul>
                            <li>Podemos (e, em alguns casos, somos obrigados a) verificar sua identidade antes de agirmos de acordo com a sua solicitação para exercer seus direitos de privacidade na Califórnia. Após recebermos e processarmos sua solicitação, entraremos em contato com você usando o endereço de e-mail fornecido em sua solicitação com instruções sobre como verificar sua identificação, após o que consultaremos nossos registros para obter informações correspondentes.</li>
                            <li>Podemos não atender parte de sua solicitação, por exemplo, certas informações que coletamos podem estar isentas desta Nota de Privacidade da Califórnia, tais como informações públicas disponibilizadas por uma entidade governamental ou informações cobertas por uma lei de privacidade diferente. Nestas situações, explicaremos por que não atendemos sua solicitação quando respondermos a você.</li>
                          </ul>
                          <p><i>Aviso de incentivo financeiro</i></p>
                          <p>Podemos oferecer descontos ou outros benefícios aos consumidores inscritos em certos programas promocionais ou recompensas, incluindo, entre outros, os seguintes: (1) Os consumidores podem optar por receber promoções por e-mail da Coca‑Cola enviando seu endereço de e-mail através do Site. Termos e condições adicionais são afixados lá. (2) Os consumidores podem tirar e carregar códigos sip & scan para acessar recompensas, sorteios e outras experiências. Os consumidores que estão logados em sua conta no Coke.com enquanto participam do sip & scan podem salvar e resgatar tais recompensas. Mais informações estão disponíveis em <a href="https://cokeurl.com/xbv6bl">https://us.coca-cola.com/sip-and-scan-faq/</a>. (3) Os consumidores podem criar uma conta na Coca‑Cola e receber um desconto de 15% em seu primeiro pedido na loja da Coca‑Cola. (4) Os consumidores podem se registrar para obter uma conta e produtos gratuitos ou com desconto. (5) Os consumidores podem participar das promoções sociais, concursos ou sorteios da Coca‑Cola para ter a chance de receber os benefícios descritos em cada uma dessas promoções.</p>
                          <p>A Coca‑Cola geralmente não atribui valor monetário ou outro valor às informações pessoais dos consumidores e nossa atividade promocional muda continuamente. Na medida em que a lei da Califórnia exige que um valor seja atribuído a tais programas, ou as diferenças de preço ou serviço que eles envolvem, a Coca‑Cola valoriza as informações pessoais coletadas e utilizadas sob cada programa como sendo iguais ao valor dos descontos ou outros incentivos financeiros fornecidos em cada um desses programas, com base em um esforço prático e de boa fé para avaliar, de forma agregada, todas as informações coletadas: (1) o tipo de informações pessoais coletadas em cada programa (por exemplo, endereço de e-mail), (2) o uso de tais informações pela Coca‑Cola em conjunto com suas atividades de marketing, (3) a faixa de descontos oferecida (que pode depender das compras de cada consumidor em tais ofertas), (4) o número de indivíduos inscritos nos respectivos programas e (5) os produtos aos quais os benefícios (como a diferença de preço) podem se aplicar. Esses valores podem mudar com o tempo. Observe que esta descrição não dispensa nenhuma informação confidencial proprietária ou comercial, incluindo segredos comerciais, e não constitui nenhuma representação com relação aos princípios contábeis geralmente aceitos ou normas de contabilidade financeira.</p>
                          <p>Uma lei californiana diferente permite aos residentes da Califórnia solicitar um aviso revelando as categorias de informações pessoais sobre você que compartilhamos com terceiros para os propósitos de marketing direto deles durante o ano civil anterior. Neste momento, a Coca‑Cola não compartilha informações pessoais com terceiros para seus propósitos de marketing direto.</p>
                          <p><strong><i>Residentes do Colorado, Connecticut, Utah e Virgínia.</i></strong> As leis de privacidade nestes estados dão aos consumidores certos direitos com relação aos seus dados pessoais. A Coca‑Cola respeitará esses direitos de qualquer residente nos Estados Unidos. Eles incluem: &nbsp;</p>
                          <ul>
                            <li><i>Direito de acessar as informações</i>: Você tem o direito de acessar e obter uma cópia de seus dados pessoais.</li>
                            <li><i>Direito a solicitar exclusão:</i> Você tem o direito de solicitar que excluamos seus dados pessoais, fornecidos por você ou obtidos por outros meios.</li>
                            <li><i>Direito à correção</i>: Você tem o direito de corrigir imprecisões em seus dados pessoais.</li>
                            <li>
                              <i>Direito de direito de optar por não participar:</i> Nossa divulgação de suas informações pessoais a terceiros fornecedores de publicidade e análises pode constituir uma venda de acordo com certas leis estaduais. Além disso, utilizamos cookies para veicular anúncios direcionados. Você tem o direito de optar por não participar dessas atividades (a) habilitando um sinal de preferência de exclusão ou Controle de Privacidade Global em seu navegador, que é reconhecido por nossos sites voltados para os EUA, (b) optando por não permitir cookies no centro de preferência de cookies de nossos sites voltados para os EUA, ou (c) enviando uma solicitação de exclusão em <a href="https://us.coca-cola.com/dsrform">https://us.coca-cola.com/dsrform</a>.
                            </li>
                          </ul>
                          <p>Além disso, os residentes do Colorado, Connecticut e Virgínia podem recorrer de uma decisão com relação a seus pedidos de privacidade de consumidor entrando em contato conosco por e-mail em <a href="mailto:privacy@coca-cola.com">privacy@coca-cola.com</a>.</p>
                          <h3>Residentes do Canada</h3>
                          <p>A Coca‑Cola coleta, utiliza e divulga informações pessoais para os propósitos identificados em nossa Política de Privacidade e para quaisquer outros propósitos, conforme permitido por lei, com aviso a você e sob seu consentimento expresso ou implícito.</p>
                          <p>Você tem certos direitos no que diz respeito às suas informações. Para acessar ou corrigir suas informações pessoais, preencha o formulário no link a seguir: <a href="https://cokeurl.com/0y7811">https://us.coca-cola.com/dsrform</a>. Observe que podemos verificar sua identidade antes de agirmos conforme sua solicitação.</p>
                          <p><i>Para residentes de Quebec:</i> A pessoa responsável pela proteção de informações pessoais dos indivíduos residentes em Quebec é Larissa Barbara Lourenco, que pode ser contatada por e-mail em <a href="mailto:privacy@coca-cola.com">privacy@coca-cola.com</a>.</p>
                          <h3>Residentes do Chile</h3>
                          <p>Conforme exigido pela lei chilena de proteção de dados, um consentimento será coletado para cada atividade realizada pela Coca‑Cola relacionada a indivíduos protegidos pela lei chilena de proteção de dados.</p>
                          <p>A lei chilena de proteção de dados oferece os seguintes direitos de privacidade: &nbsp;</p>
                          <ul>
                            <li>Solicitar informações sobre o processamento de dados pessoais</li>
                            <li>Solicitar a retificação de dados pessoais incorretos ou incompletos</li>
                            <li>Solicitar a exclusão de dados pessoais se eles forem armazenados sem base legal ou se estiverem desatualizados</li>
                            <li>Solicitar a exclusão ou o bloqueio de dados pessoais, conforme o caso, se os dados pessoais foram fornecidos voluntariamente ou se forem utilizados para comunicações comerciais e o indivíduo não desejar mais ser incluído no registro relevante, seja de forma permanente ou temporária</li>
                            <li>Opor-se ao uso de dados pessoais para fins publicitários, de pesquisa de mercado ou de pesquisa de opinião</li>
                            <li>Revogar o consentimento para o processamento de dados pessoais a qualquer momento, com efeito para o futuro. Observe, entretanto, que a revogação do consentimento pode significar que o uso posterior de alguns ou de todos os Serviços pode não ser mais possível.</li>
                          </ul>
                          <p>O controlador de suas informações pessoais é a Recofarma Indústria do Amazonas Ltda.</p>
                          <h3>Residentes da China Continental</h3>
                          <p>Veja nossa política de privacidade em separado disponível em&nbsp;<a href="https://cokeurl.com/cgs82t">https://cokeurl.com/cgs82t</a></p>
                          <h3>Para residentes do EEE, Suíça e Reino Unido</h3>
                          <p>Controlador de dados</p>
                          <p>O controlador de dados (ou seja, a entidade da Coca‑Cola que determina a finalidade e os meios de processar suas informações pessoais) das informações pessoais coletadas com relação ao uso dos Serviços no Espaço Econômico Europeu, Suíça e Reino Unido é a NV Coca‑Cola Services SA, uma empresa com escritório registrado em Chaussée de Mons 1424, 1070 Bruxelas.</p>
                          <p>Processamento</p>
                          <p>O processamento de suas informações pessoais pela Coca‑Cola está descrito acima nesta Política de Privacidade, incluindo: &nbsp;</p>
                          <ul>
                            <li>As informações pessoais coletadas e porque são coletadas (Seção 2)</li>
                            <li>Como a Coca‑Cola usa suas informações pessoais (Seção 4) e compartilha suas informações pessoais (Seção 6)</li>
                            <li>Por quanto tempo a Coca‑Cola retém suas informações pessoais (Seção 8)</li>
                          </ul>
                          <p>Base jurídica para o processando pela Coca‑Cola</p>
                          <p>A base jurídica para o processamento de suas informações pessoais pela Coca‑Cola depende do contexto em que essas informações são coletadas e processadas. Geralmente, só coletamos informações pessoais quando (i) a Coca‑Cola precisa das informações pessoais para realizar um contrato com você (como nossos termos de uso), caso em que lhe informaremos se o fornecimento de suas informações pessoais é obrigatório e as possíveis consequências se você não fornecer suas informações pessoais;</p>
                          <p>(ii) quando tivermos consentimento para fazê-lo (o qual você pode retirar a qualquer momento usando as informações de contato abaixo); ou</p>
                          <p>(iii) quando o processamento for de nosso legítimo interesse comercial e não for anulado pela privacidade ou por outros direitos e liberdades fundamentais dos usuários (como quando processamos informações pessoais para evitar o uso fraudulento dos Serviços).</p>
                          <p>se coletamos e usamos informações pessoais com base em nossos legítimos interesses (ou de terceiros), este interesse é o de prestar os Serviços e comunicar-se com você sobre esses Serviços e para responder a consultas, melhorar os Serviços, aconselhar os usuários sobre novas características ou atividades de manutenção ou empreender atividades de marketing e interesses comerciais similares para disponibilizar os Serviços para você. Podemos ter outros interesses legítimos e, se for o caso, deixaremos claros nossos interesses legítimos no momento pertinente.</p>
                          <p>Em alguns casos, também podemos ter a obrigação legal de coletar informações pessoais dos usuários. Se lhe pedirmos que forneça informações pessoais para cumprir uma exigência legal, deixaremos isso claro no momento oportuno e o informaremos se o fornecimento de suas informações pessoais é obrigatório e as possíveis implicações se você não fornecer tais informações pessoais.</p>
                          <p>Se você tiver dúvidas ou precisar de mais informações a respeito da base jurídica que nos permite coletar e utilizar suas informações pessoais, por favor, entre em contato conosco pelo e-mail privacy@coca-cola.com.</p>
                          <p>Política de Cookies</p>
                          <p>No EEE, Suíça e Reino Unido, a Coca‑Cola tem uma política de cookies independente desta Política de Privacidade. Consulte o site da Coca‑Cola que você utiliza para obter mais informações.</p>
                          <p>Direitos dos titulares dos dados</p>
                          <p>Na medida do previsto na LGPD, você tem os seguintes direitos no que diz respeito às informações pessoais relativas a você:</p>
                          <p>- Direito de acessar suas informações pessoais</p>
                          <p>- DIreito à retificação (isto é, correção, atualização)</p>
                          <p>- Direito à exclusão</p>
                          <p>- Direito a restringir o processamento</p>
                          <p>- Direito à portabilidade dos dados (isto é, receber uma cópia eletrônica das suas informações pessoais para fins de transmissão para outra organização)</p>
                          <p>- Direito à retirada do consentimento a qualquer momento</p>
                          <p>Se você gostaria de acessar, corrigir, atualizar, suprimir, restringir, opor-se ou excluir informações pessoais que você forneceu anteriormente à Coca‑Cola como ou se você gostaria de receber uma cópia eletrônica de suas informações pessoais para fins de transmissão a outra empresa (onde este direito de portabilidade lhe é fornecido por lei), envie-nos sua solicitação da seguinte forma:</p>
                          <p>o Use o formulário de contato, quando estiver disponível nos Serviços, ou em <a href="https://cokeurl.com/p55q3d">https://www.coca-cola.co.uk/our-business/contact</a></p>
                          <p>o Preencha o formulário disponível aqui: <a href="https://privacyportal.onetrust.com/webform/e3ab7adf-beb9-4769-844e-c1ec4e6d17bb/56b56bed-bb0c-4842-9e7f-5c58a7e9a4b3">https://privacyportal.onetrust.com/webform/e3ab7adf-beb9-4769-844e-c1ec4e6d17bb/56b56bed-bb0c-4842-9e7f-5c58a7e9a4b3</a></p>
                          <p>o Por correio neste endereço: Consumer Interaction Centre, PO Box 73229, London E14 1RP</p>
                          <p>o Nosso encarregado de proteção de dados da UE está disponível em <a href="mailto:dpo-europe@coca-cola.com">dpo-europe@coca-cola.com</a>.</p>
                          <p>Em sua solicitação, deixe claro quais informações pessoais você gostaria de alterar, se você gostaria de suprimir suas informações pessoais de nosso banco de dados ou outras limitações que você gostaria de colocar em nosso uso de suas informações pessoais. Para sua proteção, verificamos sua identidade e residência geográfica antes de atender a sua solicitação. Atenderemos a sua solicitação tão logo seja razoavelmente possível e dentro dos prazos exigidos pela legislação aplicável.</p>
                          <p>Observe que muitas vezes precisamos reter certas informações pessoais para fins de manutenção de registros e/ou para concluir qualquer transação que você iniciou antes de enviar sua solicitação (por exemplo, quando você faz uma compra ou participa de uma promoção, talvez você não possa alterar ou excluir as informações pessoais fornecidas enquanto não for concluída a compra ou promoção). Também não podemos apagar certas informações pessoais por motivos legais.</p>
                          <p>Como entrar em contato com as autoridades de proteção de dados</p>
                          <p><i>Autoridades de proteção de dados da UE</i></p>
                          <p>Você tem o direito de apresentar uma reclamação sobre o modo como processamos suas informações pessoais junto à autoridade de proteção de dados apropriada da UE. Clique <a href="https://ec.europa.eu/info/law/law-topic/data-protection/reform/what-are-data-protection-authorities-dpas_en">aqui</a> para saber mais detalhes.</p>
                          <p><i>Regulador de proteção de dados da Suíça</i> Office of the Federal Data Protection and Information Commissioner (FDPIC) Feldeggweg 1 CH - 3003 Berne Tel: 41 (0)58 462 43 95 (seg-sex, 10h00-12h00) Telefax: 41 (0)58 465 99 96 <a href="https://www.edoeb.admin.ch/edoeb/en/home/the-fdpic/contact/address.html">https://www.edoeb.admin.ch/edoeb/en/home/the-fdpic/contact/address.html</a></p>
                          <p><i>Regulador de proteção de dados do Reino Unido</i> Information Commissioner's Office (ICO) Wycliffe House, Water Lane, Wilmslow Cheshire SK9 5AF Telefone: 0303 123 1113 Fax: 01625 524510 <a href="https://ico.org.uk/global/contact-us/">https://ico.org.uk/global/contact-us/</a></p>
                          <h3>Residentes da Índia</h3>
                          <p>A lei aplicável que rege a política de privacidade é a Lei de TI, 2000 e práticas e procedimentos de segurança razoáveis e Regras de dados ou informações pessoais sensíveis, 2011, e em substituição às Regras de tecnologia da informação (diretrizes intermediárias), 2011, emitidas sob a Lei de TI, 2000.</p>
                          <p>Endereço de e-mail do encarregado de reclamações nomeado pela Coca Cola India Private Limited (CCIPL): <a href="mailto:grievanceofficerprivacyindia@coca-cola.com">grievanceofficerprivacyindia@coca-cola.com</a></p>
                          <p>Escritório registrado da CCIPL: Plot No. 1109-1110, Village Pirangut, Taluka Mulshi, Distt. Pune</p>
                          <p>Escritório corporativo da CCIPL: 1601-1701, One Horizon Center, DLF Golf Course Road, Phase V, Sector 43, Gurgaon, Haryana</p>
                          <h3>Residentes do Japão</h3>
                          <p>Veja nossa política de privacidade específica disponível em&nbsp;<a href="https://cokeurl.com/rb7p5c">https://cokeurl.com/rb7p5c</a></p>
                          <h3>Residentes do México</h3>
                          <p>O Aviso de Privacidade da Coca‑Cola México aplica-se ao processamento de informações pessoais de residentes do México, conforme exigido pela lei mexicana, LEY FEDERAL DE PROTECCIÓN DE DATOS PERSONALES EN POSESIÓN DE LOS PARTICULARES.</p>
                          <p>O controlador de suas informações pessoais é: Servicios Integrados de Administración y Alta Gerencia, S. de R.L de C.V., The Coca‑Cola Export Corporation, Sucursal En México, Rubén Darío 115, Col. Bosque de Chapultepec, CP 11580, CDMX. Tel:+5255.5262.200</p>
                          <p>O regulador de proteção de dados é o <a href="https://home.inai.org.mx/">Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales</a>.</p>
                          <p>Se você quiser saber sobre o Aviso de Privacidade da Coca‑Cola México, entre em contato conosco pelo e-mail <a href="mailto:avisodeprivacidad@coca-cola.com.mx">avisodeprivacidad@coca-cola.com.mx</a>.</p>
                          <h3>Residentes das Filipinas</h3>
                          <p>A Coca‑Cola não coleta a data de nascimento completa dos consumidores nas Filipinas. A Coca‑Cola obterá o consentimento dos pais quando estiver processando conscientemente informações pessoais de consumidores menores de 18 anos.</p>
                          <p>O controlador de suas informações pessoais é a Coca‑Cola Far East Ltd. (Sede operacional regional das Filipinas) e a Coca‑Cola Export Corporation (Filial das Filipinas).</p>
                          <h3>Residentes da Coreia do Sul</h3>
                          <p>Veja nossa política de privacidade específica disponível em&nbsp;<a href="https://cokeurl.com/eljncr">https://cokeurl.com/eljncr</a> </p>
                          <h3>Residentes da Tailândia</h3>
                          <p>A Lei de Proteção de Dados Pessoais da Tailândia de 2019 se aplica ao processamento de informações pessoais dos residentes da Tailândia.</p>
                          <p>O controlador de suas informações pessoais é a Coca‑Cola (Thailand) Ltd. Entre em contato com <a href="mailto:privacythailand@coca-cola.com">privacythailand@coca-cola.com</a> para responder suas dúvidas.</p>
                          <p>A seguir está um resumo de seus direitos de proteção de dados:</p>
                          <p><i>Seu direito de acesso às informações pessoais</i></p>
                          <p>Você tem o direito de obter uma confirmação sobre se processamos suas informações pessoais, receber uma cópia de suas informações pessoais mantidas por nós como controladores e obter algumas outras informações sobre como e por que processamos suas informações pessoais.</p>
                          <p><i>Seu direito à retificação/alteração de informações pessoais</i></p>
                          <p>Você tem o direito de solicitar que suas informações pessoais sejam corrigidas ou alteradas onde estiverem incorretas (por exemplo, se você mudar seu nome ou endereço) e que as informações pessoais incompletas sejam completadas. Quando isso for possível em termos práticos, após sermos notificados de que qualquer informação pessoal processada por nós não é mais exata, faremos as atualizações conforme apropriado, com base em suas informações atualizadas.</p>
                          <p><i>Seu direito de exclusão/direito a ser esquecido</i></p>
                          <p>Você tem o direito de obter a exclusão de suas informações pessoais nos seguintes casos: &nbsp;</p>
                          <ul>
                            <li>As informações pessoais não são mais necessárias em relação às finalidades para as quais foram coletadas e processadas.</li>
                            <li>Nossa base jurídica para o processamento é o consentimento, você retira o consentimento, e não temos outra base jurídica para o processamento.</li>
                            <li>Nossa base jurídica para o processamento é que o mesmo é necessário para interesses legítimos perseguidos por nós ou por terceiros, você se opõe a nosso processamento, e não temos fundamentos jurídicos legítimos superiores.</li>
                            <li>Você se opõe ao nosso processamento para fins de marketing direto.</li>
                            <li>Suas informações pessoais foram processadas de forma ilegal.</li>
                            <li>Suas informações pessoais devem ser apagadas para cumprir com uma obrigação legal à qual estamos sujeitos.</li>
                          </ul>
                          <p><i>Seu direito de restringir o processamento</i></p>
                          <p>Você tem direito de restringir o nosso processamento de suas informações pessoais nos seguintes casos: &nbsp;</p>
                          <ul>
                            <li>Você contesta a exatidão das informações pessoais que processamos a seu respeito. Devemos restringir o processamento das informações contestadas até que possamos verificar a exatidão de suas informações pessoais.</li>
                            <li>As informações pessoais devem ser apagadas ou destruídas, mas em vez disso você solicitou a restrição do uso dessas informações pessoais.</li>
                            <li>Não é mais necessário reter as informações pessoais para os propósitos da coleta, mas você nos pede para retermos essas informações pessoais para fins de estabelecimento de um direito, cumprimento ou execução de ações judiciais, ou para a defesa de ações judiciais.</li>
                            <li>As informações pessoais estão pendentes de verificação dos fundamentos legítimos para processá-las, de sua necessidade para ações judiciais (estabelecimento de direito, cumprimento, exercício ou defesa), ou de sua necessidade de executarmos uma tarefa de interesse público.</li>
                          </ul>
                          <p><i>Seu direito de se opor ao processamento</i></p>
                          <p>Você tem o direito de se opor ao nosso processamento de suas informações pessoais nos seguintes casos: &nbsp;</p>
                          <ul>
                            <li>as informações pessoais foram coletadas para atender à necessidade de:</li>
                            <li>&nbsp;desempenho de uma tarefa realizada no interesse público por nós, ou exercício da autoridade oficial em nós investida, e os interesses legítimos da Coca‑Cola</li>
                            <li>coleta, uso ou divulgação de tais informações pessoais é para fins de marketing direto;</li>
                            <li>coleta, uso ou divulgação das informações pessoais para fins de pesquisa científica, histórica ou estatística</li>
                          </ul>
                          <p>Observação: Reservamo-nos o direito de recusar sua solicitação se pudermos provar que (i) há motivos legítimos e irrefutáveis para o processamento dessas informações pessoais, ou que elas são necessárias para o estabelecimento, cumprimento, exercício ou defesa de ações judiciais, ou (ii) o processamento de suas informações pessoais para fins de pesquisa científica, histórica ou estatística é necessário para o desempenho de uma tarefa realizada por motivos de interesse público.</p>
                          <p><i>Seu direito à portabilidade das informações</i></p>
                          <p>Você tem o direito de receber as informações pessoais que nos forneceu e tem o direito de enviar as informações para outra organização (ou solicitar que o façamos, se for tecnicamente viável) onde: &nbsp;</p>
                          <ul>
                            <li>nossa base legal para processar as informações pessoais é o consentimento ou a necessidade para a execução de nosso contrato com você e</li>
                            <li>o processamento é feito por meios automatizados.</li>
                          </ul>
                          <p><i>Seu direito a revogar o consentimento</i></p>
                          <p>Quando processamos informações pessoais com base no consentimento, os indivíduos têm o direito de revogar o consentimento a qualquer momento. Geralmente não processamos informações pessoais com base no consentimento ( já que geralmente podemos contar com outra base jurídica).</p>
                          <p>O órgão regulador de privacidade dos dados é:</p>
                          <p>Thailand Personal Data Protection Commission Ministry of Digital Economy and Society Endereço: No. 120, Moo 3, The Government Complex, Tower B, Changwattana Road, Lak Si, Bangkok, Thailand, Tel: 662-142-1033, 662-141-6993 E-mai: <a href="mailto:pdpc@mdes.go.th">pdpc@mdes.go.th</a> Website: <a href="https://www.mdes.go.th/mission/82">https://www.mdes.go.th/mission/82</a></p>
                          <h3>Residentes da Turquia</h3>
                          <p>A Coca‑Cola oferece a você a opção de revisar, corrigir, atualizar ou modificar informações pessoais que você tenha fornecido anteriormente. Para exercer esses direitos:</p>
                          <p>o Envie um e-mail para <a href="mailto:cocacoladanismamerkezi@eur.ko.com">cocacoladanismamerkezi@eur.ko.com</a></p>
                          <p>o Ligue gratuitamente para o nosso número: 0 800 261 1920</p>
                          <p>Em sua solicitação, deixe claro quais informações pessoais você gostaria de alterar, se você gostaria de suprimir suas informações pessoais de nosso banco de dados ou outras limitações que você gostaria de colocar em nosso uso de suas informações pessoais. Para sua proteção, pode ser que precisemos verificar sua identidade e residência geográfica antes de atender a sua solicitação. Atenderemos a sua solicitação tão logo seja razoavelmente possível e dentro dos prazos exigidos pela legislação aplicável.</p>
                          <p>* * * * *</p>
                          <p>A seguir estão as informações adicionais sobre a entidade da Coca‑Cola que atua como controladora de suas informações pessoais, dependendo de seu local de residência habitual:</p>
                          <p><strong>Bangladesh</strong> Coca‑Cola Bangladesh Beverages Limited Crystal Palace (11th Floor), Rd 140, Dhaka 1212, Bangladesh</p>
                          <p><strong>Reino do Butão</strong> TASHI BEVERAGES LIMITED POST BOX # 267, PASAKHA BHUTAN. 00975-77190300 (O)</p>
                          <p><strong>Chile</strong> Coca‑Cola de Chile S.A Avenida Presidente Kennedy 5757 Piso 12 Las Condes, Santiago</p>
                          <p><strong>Colômbia</strong> Coca‑Cola Bebidas de Colômbia, S.A. AK45 #103-60. Piso 8. Bogotá, Colômbia. Tel. 638-6600 Órgão regulador de proteção de dados: Superintendencia de Industria y Comercio (SIC) <a href="https://www.sic.gov.co/">https://www.sic.gov.co</a> Carrera 13 No. 27 - 00, Pisos 1 y 3 Línea Gratuita Nacional: 01 8000 910165 <a href="mailto:contactenos@sic.gov.co">contactenos@sic.gov.co</a></p>
                          <p><strong>Costa Rica</strong> Coca‑Cola Industrias SRL Plaza Tempo, Oficinas Corporativas, Escazú, Sab José, Costa Rica Órgão regulador de proteção de dados: Agencia de Protección de Datos de los Habitantes (PRODHAB). prodhab.go.cr. San Pedro de Montes de Oca, Alameda, Avenida 7 y calle 49, edificio Da Vinci. Sistema Costarricense de Información Jurídica (pgrweb.go.cr)</p>
                          <p><strong>República Dominicana</strong> Distrito La Hispaniola Compañía De Servicios, S.R.L., Avenida Winston Churchill, Torre Acrópolis, Piso 12, Ensanche Piantini Attn: Santiago Carrasco</p>
                          <p><strong>Equador</strong> Coca‑Cola de Ecuador. S.A. Republica de El Salvador N36.230 y Naciones Unidas. Edificio Citibank Piso 1. Quito, Equador Tel: 593 2 382 622 Attn: Mariana Rosalba</p>
                          <p><strong>Indonésia</strong> PT Coca‑Cola Indonesia South Quarter Tower B, Penthouse Floor, Jl. R. A. Kartini Kav. 8, Cilandak Barat, Jakarta Selatan</p>
                          <p><strong>República das Maldivas</strong> Male Aerated Water Company 5GH7+CG8, Boduthakurufaanu Magu, Malé, Maldives</p>
                          <p><strong>Nepal</strong> Bottlers Nepal Limited and Bottlers Nepal Bottlers Nepal Limited, Balaju Industrial District, Balaju, Kathmandu, Nepal, P.O. Box: 2253 +977-01-4352986, +977-01-4352988</p>
                          <p>Bottlers Nepal (Terai) Limited, Gondrang, Bharatpur-9, Chitwan, Nepal, P.O. Box: 20 +977-056420216</p>
                          <p><strong>Perú</strong> Coca‑Cola Servicios de Perú, S.A. República de Panamá 4050. Surquillo. Lima, Perú. Tel. (511) 411-4200 Attn: Maria Sol Jares Órgão regulador de proteção de dados: Autoridad Nacional de Protección de Datos Personales <a href="https://www.gob.pe/anpd">https://www.gob.pe/anpd</a> Scipión Llona 350 Miraflores - Lima - Perú <a href="mailto:protegetusdatos@minjus.gob.pe">protegetusdatos@minjus.gob.pe</a></p>
                          <p><strong>Filipinas</strong> Coca‑Cola Far East Ltd. (Sede operacional regional das Filipinas) 24th Floor, Six/NEO Bldg., 5th Ave cor. 26th Street, Bonifacio Global City, Taguig The Coca‑Cola Export Corporation (escritório das Filipinas) 24th Floor Net Lima Building 5th Avenue corner 26th Street Bonifacio Global City Taguig, Manila, 1634 Philippines</p>
                          <p><strong>Sri Lanka</strong> Coca‑Cola Beverages Sri Lanka Limited B214, Biyagama Road, Colombo, Sri Lanka</p>
                          <p><strong>Ucrânia</strong> Coca‑Cola Ukraine Limited LLC 139 Velyka Vasylkivska Street, 13 floor Velyka Vasylkivska Kyiv, 03150 Ucrânia</p>
                          <p><strong>Vietnã</strong> Coca‑Cola Southeast Asia, Inc. 235 Dong Khoi Street, District 1, Ho Chi Minh City</p>
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