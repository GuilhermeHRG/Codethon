import React from "react";
import { Link } from "react-router-dom";

// Exemplo de notícias; em um cenário real, você pode buscar esses dados de uma API
const noticias = [
  {
    id: 1,
    titulo: "Descoberta Arqueológica Surpreendente Revela Civilização Perdida",
    autor: "João Silva",
    descricao:
      "Uma equipe de arqueólogos fez uma descoberta incrível em uma região remota do mundo, desenterrando vestígios de uma civilização perdida há milênios. Os artefatos encontrados incluem ferramentas avançadas, escritos misteriosos e estruturas arquitetônicas complexas, sugerindo um alto nível de sofisticação tecnológica e cultural. Esta descoberta promete reescrever os livros de história e nos proporcionar uma compreensão mais profunda sobre o desenvolvimento humano e as sociedades antigas.",
    data: "28 de junho de 2024",
    foto: "https://img.freepik.com/fotos-gratis/close-das-gravuras-nas-paredes-do-templo-de-luxor-egito_181624-38326.jpg?t=st=1719660114~exp=1719663714~hmac=7c1e07c4dd28362df63e03768b0b00abdf25f6cd3bf95e20b43cb35cc1beea2f&w=900",
  },
  {
    id: 2,
    titulo: "Tecnologia de Inteligência Artificial Revoluciona a Indústria",
    autor: "Maria Fernandes",
    descricao:
      "A inteligência artificial está transformando várias indústrias ao redor do mundo, desde a automação de tarefas repetitivas até a criação de soluções inovadoras para problemas complexos. Empresas de todos os setores estão investindo pesadamente em IA para melhorar a eficiência, reduzir custos e oferecer produtos e serviços mais personalizados. Especialistas acreditam que estamos apenas começando a explorar o potencial da IA, com implicações profundas para o futuro do trabalho e da sociedade.",
    data: "27 de junho de 2024",
    foto: "https://img.freepik.com/fotos-gratis/conceito-de-nuvem-ai-com-braco-robotico_23-2149739748.jpg?t=st=1719660371~exp=1719663971~hmac=cda82eb7ae36efcc2d5263dbf369ed356770c6ed258ed6cf24a062933214ec95&w=826",
  },
  {
    id: 3,
    titulo: "Novo Tratamento para Doenças Raras é Descoberto",
    autor: "Carlos Almeida",
    descricao:
      "Cientistas anunciaram um novo tratamento promissor para doenças raras, trazendo esperança para milhões de pacientes e suas famílias. Este tratamento inovador, baseado em terapia genética, mostrou resultados impressionantes em ensaios clínicos, corrigindo mutações genéticas específicas e melhorando significativamente a qualidade de vida dos pacientes. A comunidade médica está otimista de que esta abordagem poderá ser adaptada para tratar uma variedade de doenças genéticas no futuro.",
    data: "26 de junho de 2024",
    foto: "https://img.freepik.com/fotos-gratis/closeup-vista-da-mao-do-farmaceutico-tirando-a-caixa-de-remedios-da-prateleira-da-farmacia_342744-320.jpg?t=st=1719660506~exp=1719664106~hmac=85e248fa7451cfb8f7972fec317e5208e4112dbd1837e973a0b664cd2754855f&w=900",
  },
  {
    id: 4,
    titulo: "Estudo Revela os Benefícios do Exercício Regular",
    autor: "Ana Oliveira",
    descricao:
      "Um novo estudo mostra que o exercício regular traz inúmeros benefícios para a saúde, incluindo a melhoria da saúde cardiovascular, fortalecimento dos músculos e ossos, e a redução do risco de doenças crônicas como diabetes e hipertensão. Além disso, a atividade física regular está associada a melhorias na saúde mental, ajudando a reduzir o estresse, ansiedade e sintomas de depressão. Os pesquisadores recomendam pelo menos 150 minutos de exercício moderado por semana para a maioria dos adultos.",
    data: "25 de junho de 2024",
    foto: "https://img.freepik.com/fotos-gratis/homem-de-vista-lateral-segurando-o-elastico_23-2149596393.jpg?t=st=1719660737~exp=1719664337~hmac=b67d5a256792b1c9612fb5089f498043650e42933796000df1182e8305ed5e75&w=900",
  },
  {
    id: 5,
    titulo: "Economia Global em Recuperação",
    autor: "Lucas Silva",
    descricao:
      "A economia global está mostrando sinais de recuperação após a pandemia, com muitos países registrando crescimento econômico positivo e queda nas taxas de desemprego. Políticas fiscais e monetárias expansivas, juntamente com avanços na vacinação, têm contribuído para este cenário otimista. No entanto, desafios persistem, incluindo a inflação crescente, desigualdade econômica e incertezas geopolíticas. Economistas alertam que é necessário manter um equilíbrio cuidadoso para sustentar essa recuperação.",
    data: "24 de junho de 2024",
    foto: "https://img.freepik.com/fotos-gratis/globo-de-cristal-com-informacoes-sobre-acoes_1150-17697.jpg?t=st=1719660840~exp=1719664440~hmac=a5f9776633ba93e356c070cad46d08308c09d7b3de479fa8ebc14b4288dfc2a6&w=900",
  },
  {
    id: 6,
    titulo: "Avanços na Energia Renovável",
    autor: "Fernanda Costa",
    descricao:
      "Novos avanços na energia renovável estão impulsionando a transição para uma economia verde. Tecnologias como energia solar e eólica estão se tornando mais eficientes e acessíveis, enquanto inovações em armazenamento de energia estão ajudando a superar as limitações de intermitência dessas fontes. Governos e empresas estão investindo em infraestrutura de energia limpa, com o objetivo de reduzir as emissões de carbono e combater as mudanças climáticas.",
    data: "23 de junho de 2024",
    foto: "https://img.freepik.com/fotos-gratis/paineis-solares-e-usina-eolica-fora_23-2149352234.jpg?t=st=1719660919~exp=1719664519~hmac=9b643ae4105f98d8b08f3808ef17916c7a8416a296cb787a229be23aa02b9467&w=900",
  },
  {
    id: 7,
    titulo: "Desenvolvimento Sustentável nas Cidades",
    autor: "Rafael Pereira",
    descricao:
      "Iniciativas de desenvolvimento sustentável estão transformando as cidades ao redor do mundo. Projetos de urbanismo verde, como parques e jardins verticais, estão melhorando a qualidade do ar e proporcionando espaços de lazer para os cidadãos. Além disso, políticas de mobilidade sustentável, como ciclovias e transporte público eficiente, estão reduzindo a dependência de veículos particulares e diminuindo as emissões de carbono. Essas iniciativas estão criando ambientes urbanos mais saudáveis e resilientes.",
    data: "22 de junho de 2024",
    foto: "https://img.freepik.com/fotos-gratis/feche-o-broto-do-solo_23-2148905253.jpg?t=st=1719661020~exp=1719664620~hmac=55997c222a44c2bfb40544b16b27f778ca6eb93e3302b9b798e199930576000c&w=900",
  },
  {
    id: 8,
    titulo: "Educação Online Ganha Popularidade",
    autor: "Beatriz Lima",
    descricao:
      "A educação online está se tornando cada vez mais popular, oferecendo flexibilidade e acesso a uma ampla gama de cursos e programas. Com o aumento da conectividade à internet e o desenvolvimento de plataformas de aprendizado inovadoras, estudantes de todas as idades podem adquirir novas habilidades e conhecimentos a partir de qualquer lugar do mundo. A educação online também está promovendo a inclusão, permitindo que pessoas de regiões remotas ou com dificuldades de mobilidade acessem a educação de qualidade.",
    data: "21 de junho de 2024",
    foto: "https://img.freepik.com/fotos-gratis/menina-sorridente-em-casa-durante-a-escola-online_23-2148827470.jpg?t=st=1719661078~exp=1719664678~hmac=39afa63e9e31f518c4a859e3a5e2f7a9bd0faebe3800059694f63eb7d153abbc&w=900",
  },
  {
    id: 9,
    titulo: "Mudanças Climáticas e Seus Impactos",
    autor: "Marcos Souza",
    descricao:
      "Estudos recentes destacam os impactos das mudanças climáticas em diferentes regiões do mundo. Desde o aumento do nível do mar até eventos climáticos extremos, as consequências das mudanças climáticas estão se tornando cada vez mais evidentes. Cientistas alertam que ações imediatas são necessárias para mitigar esses efeitos e adaptar nossas comunidades às novas realidades climáticas. Governos e organizações estão trabalhando em estratégias de resiliência e sustentabilidade para enfrentar esses desafios.",
    data: "20 de junho de 2024",
    foto: "https://img.freepik.com/fotos-gratis/colagem-de-conceito-de-mudanca-climatica_23-2149129761.jpg?t=st=1719661242~exp=1719664842~hmac=34f477454e10d3fc6fd55108b3179c6064735f51847376bd2b5257a1d254a5ea&w=900",
  },
  {
    id: 10,
    titulo: "Tecnologia 5G e o Futuro da Conectividade",
    autor: "Juliana Martins",
    descricao:
      "A tecnologia 5G está prometendo revolucionar a conectividade em todo o mundo, oferecendo velocidades de internet ultrarrápidas e maior capacidade de dispositivos conectados. Esta nova geração de redes móveis possibilitará avanços significativos em áreas como a internet das coisas (IoT), realidade aumentada e virtual, e veículos autônomos. À medida que a implementação do 5G avança, espera-se que ele transforme diversos setores e melhore a experiência digital dos consumidores.",
    data: "19 de junho de 2024",
    foto: "https://img.freepik.com/fotos-gratis/tecnologia-de-fundo-de-cidade-inteligente-de-rede-5g_53876-108517.jpg?t=st=1719661295~exp=1719664895~hmac=0788cc2a77eea712ec9116bbe6918ecc8fdf9727c67bc81aa5e81a403c29da97&w=900",
  },
  {
    id: 11,
    titulo: "Saúde Mental em Foco",
    autor: "Pedro Santos",
    descricao:
      "A importância da saúde mental está ganhando destaque na sociedade atual, com um crescente reconhecimento dos desafios enfrentados por muitas pessoas. Iniciativas para promover o bem-estar mental incluem campanhas de conscientização, acesso a serviços de saúde mental e práticas de autocuidado. Especialistas enfatizam a necessidade de criar ambientes de apoio e reduzir o estigma associado às condições de saúde mental, garantindo que todos tenham acesso aos recursos necessários para uma vida saudável e equilibrada.",
    data: "18 de junho de 2024",
    foto: "https://img.freepik.com/fotos-gratis/mulher-meditando-na-natureza-vista-lateral_23-2148940305.jpg?t=st=1719661365~exp=1719664965~hmac=4a3873a8d1f028e60a141a6325a94dfd5fe83550e085f9a851f590880ad81477&w=1060",
  },
  {
    id: 12,
    titulo: "Inovações na Agricultura Moderna",
    autor: "Laura Rocha",
    descricao:
      "Inovações na agricultura estão ajudando a aumentar a produtividade e a sustentabilidade, com novas tecnologias que incluem sensores de solo, drones para monitoramento de culturas e métodos avançados de irrigação. Essas inovações estão permitindo que os agricultores otimizem o uso de recursos, reduzam o desperdício e melhorem os rendimentos das colheitas. Além disso, práticas agrícolas sustentáveis estão sendo adotadas para proteger o meio ambiente e garantir a segurança alimentar a longo prazo.",
    data: "17 de junho de 2024",
    foto: "https://img.freepik.com/fotos-gratis/close-up-homem-usando-um-tablet-em-um-campo_23-2148233377.jpg?t=st=1719661416~exp=1719665016~hmac=b0722cfea20dffb8ae6192f857525d3d9e2da53941b024d7016338e8bea256df&w=900",
  },
  {
    id: 13,
    titulo: "Exploração Espacial: O Futuro das Missões Interplanetárias",
    autor: "Patrícia Mendes",
    descricao:
      "A exploração espacial está entrando em uma nova era com planos para missões interplanetárias e o estabelecimento de bases permanentes em outros planetas. Organizações espaciais internacionais estão colaborando em projetos ambiciosos que visam explorar Marte, enviar sondas para luas de Júpiter e desenvolver tecnologias para viagens interplanetárias. Essas missões representam um passo significativo para expandir nossa presença no espaço e buscar novos conhecimentos sobre o cosmos.",
    data: "16 de junho de 2024",
    foto: "https://img.freepik.com/fotos-gratis/retrato-em-preto-e-branco-de-mulher-trabalhadora-em-celebracao-do-dia-do-trabalho_23-2151296008.jpg?t=st=1719665447~exp=1719669047~hmac=6cde18d42c37c349079939ff62b1010647be3f9321f75475024a4c18136de34a&w=900",
  },
  {
    id: 14,
    titulo: "Segurança Cibernética em Tempos de Crise",
    autor: "Roberto Lima",
    descricao:
      "Com o aumento das ameaças digitais e ataques cibernéticos, a segurança cibernética tornou-se uma prioridade para empresas e governos. Novas estratégias e tecnologias estão sendo desenvolvidas para proteger dados sensíveis e assegurar sistemas contra intrusões e vazamentos. Especialistas discutem as melhores práticas para fortalecer a segurança digital, garantir a integridade das informações e preparar-se para possíveis crises cibernéticas.",
    data: "15 de junho de 2024",
    foto: "https://img.freepik.com/fotos-gratis/conceito-de-colagem-de-controle-de-qualidade-padrao_23-2149595831.jpg?t=st=1719665570~exp=1719669170~hmac=6e62430ac258f663bc2eec444025e379acb8abc034935235c57b36bc3761e8f2&w=900",
  },
  {
    id: 15,
    titulo: "O Impacto da Inteligência Artificial na Medicina",
    autor: "Ricardo Almeida",
    descricao:
      "A inteligência artificial está fazendo avanços significativos na medicina, desde diagnósticos mais precisos até o desenvolvimento de tratamentos personalizados. Algoritmos de IA estão sendo usados para analisar grandes volumes de dados médicos, identificar padrões e prever doenças com maior precisão. Esses desenvolvimentos estão abrindo novas possibilidades para melhorar a qualidade dos cuidados médicos e a eficiência dos sistemas de saúde.",
    data: "14 de junho de 2024",
    foto: "https://img.freepik.com/fotos-gratis/medicos-usando-simulacao-de-rv-com-tecnologia-medica-de-holograma_53876-96336.jpg?t=st=1719665759~exp=1719669359~hmac=77d26d679b164079409827efdd2e5da3323378c61a4ef5eeaabb95a999890e0b&w=900",
  },
  {
    id: 16,
    titulo: "O Futuro da Energia Renovável",
    autor: "Ricardo Almeida",
    descricao:
      "O futuro da energia renovável está sendo moldado por novas tecnologias e investimentos em fontes de energia limpa. A transição para energias renováveis é essencial para combater as mudanças climáticas e garantir um futuro sustentável para as próximas gerações.",
    data: "13 de junho de 2024",
    foto: "https://img.freepik.com/fotos-gratis/lampada-3d-com-projeto-de-economia-de-energia_23-2148907427.jpg?t=st=1719665859~exp=1719669459~hmac=d955f53405ed7f3d93f15ab75a5eed43ac22db37952003b21205a9d8a029b3b2&w=740",
  },
];

export default function AllNews() {
  return (
    <div className="px-4 py-6 md:px-6 lg:py-16 md:py-12">
      <div className="mb-4">
        <Link
          to="/"
          className="text-white bg-blue-600 px-2 py-1 hover:bg-blue-700 rounded"
        >
          {"<- Voltar"}
        </Link>
      </div>
      <h1 className="text-3xl font-extrabold tracking-tight lg:text-4xl lg:leading-[3rem] mb-6">
        Todas as Notícias
      </h1>
      <div className="grid grid-cols-1 gap-4 mb-4 sm:grid-cols-2 lg:grid-cols-4 px-4 w-11/12">
        {noticias.map((noticia) => (
          <div
            key={noticia.id}
            className="bg-gray-300 rounded overflow-hidden cursor-pointer hover:opacity-75"
          >
            <Link to={`/noticia/${noticia.id}`}>
              <img
                src={noticia.foto}
                alt={noticia.titulo}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{noticia.titulo}</h3>
                <p className="text-sm text-gray-600">{noticia.data}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
