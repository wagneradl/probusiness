import { AlertTriangle } from 'lucide-react'
import { PageHeader } from './_components/layout/page-header'
import { SectionTitle } from './_components/layout/section-title'
import { Alert, AlertTitle, AlertDescription } from './_components/ui/alert'
import { Card, CardHeader, CardTitle, CardContent } from './_components/ui/card'
import { FlowDiagram } from './_components/content/flow-diagram'
import { PrintableBox } from './_components/content/printable-box'
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from './_components/ui/table'
import { Timeline, TimelineItem } from './_components/content/timeline'
import { Checklist, ChecklistItem } from './_components/content/checklist'
import { TechStackGrid, TechStackItem } from './_components/content/tech-stack-grid'
import { BudgetTotal } from './_components/content/budget-total'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 p-5 md:p-10">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-10">
        
        {/* HEADER */}
        <PageHeader
          title="🎯 BLUEPRINT EXECUTIVO FINAL"
          subtitle="SEBRAE Pró Business 2025 | Stand SMN"
          meta={
            <>
              <strong>Evento:</strong> 12-13/11/2025 | 18h-22h<br />
              <strong>Local:</strong> Teatro Pedra do Reino - João Pessoa/PB<br />
              <strong>Stand:</strong> Entrada (alta visibilidade)
            </>
          }
        />

        <Alert variant="destructive" className="mb-8">
          <AlertTriangle className="h-5 w-5" />
          <AlertTitle>⚠️ DECISÃO CRÍTICA</AlertTitle>
          <AlertDescription>
            Este documento precisa ser aprovado HOJE (03/11) até 20h. Após esse horário, inviabiliza execução com qualidade.
          </AlertDescription>
        </Alert>

        {/* RESUMO EXECUTIVO */}
        <SectionTitle>📊 RESUMO EXECUTIVO</SectionTitle>
        
        <Card>
          <CardHeader>
            <CardTitle>Missão do Stand</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-bold mb-6">
              &quot;Ser o stand mais inovador e fotografado do SEBRAE, posicionando SMN como referência em transformação digital&quot;
            </p>
            
            <h4 className="font-semibold text-lg mt-6 mb-3">Conexão das 3 Marcas:</h4>
            <p className="italic text-muted-foreground mb-6">
              &quot;A SMN constrói o futuro: forma pessoas (IFTI), desenvolve sistemas (GCPro) e transforma empresas através de tecnologia de missão crítica.&quot;
            </p>
            
            <h4 className="font-semibold text-lg mt-6 mb-3">Objetivos Primários:</h4>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>BUZZ:</strong> Stand mais comentado/fotografado</li>
              <li><strong>POSICIONAMENTO:</strong> SMN = inovação (mensagem clara)</li>
              <li><strong>LEADS:</strong> 200+ empresários com dados completos</li>
              <li><strong>NETWORKING:</strong> 5+ reuniões agendadas com decisores</li>
            </ul>
          </CardContent>
        </Card>

        {/* ARQUITETURA DE JORNADAS - VERSÃO COMPLETA */}
        <SectionTitle>🗺️ ARQUITETURA DE JORNADAS</SectionTitle>
        
        <FlowDiagram>
{`PRÉ-EVENTO (09-11/11)
    │
    ├─ Instagram: Posts teaser
    ├─ LinkedIn: Posts convite
    └─ Stories: Bastidores
    
DURANTE EVENTO (12-13/11) - DAS 18H ÀS 22H
    │
    ├─ CANAL A: Instagram "Qual Seu Arquétipo?"
    │   │
    │   ├─ Promotoras distribuem CARDS com QR
    │   ├─ QR abre Instagram DM
    │   ├─ Quiz 5 perguntas (60s)
    │   ├─ Resultado: 4 arquétipos possíveis
    │   ├─ Badge personalizado + brinde digital
    │   ├─ 3 números da sorte (#IG-timestamp)
    │   └─ CTA: "Vem no stand!"
    │
    └─ CANAL B: Totem Físico "Termômetro Digital"
        │
        ├─ 2 totens touch Windows (alugados)
        ├─ Web app: quiz.smn.tec (Vercel)
        ├─ Quiz empresarial 5 perguntas
        ├─ Resultado + score de maturidade
        ├─ QR Code → brinde digital correto
        ├─ 3 números da sorte (#WEB-timestamp)
        └─ Direciona às estações
        
ESTAÇÕES NO STAND (3)
    │
    ├─ IFTI: "Trilha de Desenvolvimento"
    │   ├─ TV com vídeo salários TI
    │   ├─ Tablet: ifti.org.br/cadastro
    │   └─ +2 números sorte (#IFTI)
    │
    ├─ GCPro: "Calculadora de Perdas"
    │   ├─ TV com vídeo "Antes x Depois"
    │   ├─ QR → gcpro.com.br/diagnostico
    │   └─ +2 números sorte (#GCPRO)
    │
    └─ SMN: "Lounge + Agendamento VIP"
        ├─ Sofá + mesa
        ├─ Tablet: smn.tec/agendar (Calendly)
        ├─ Atendimento personalizado Ricardo/Wagner
        └─ +2 números sorte (#MEET)
        
SORTEIO ALEXA
    │
    ├─ 21h45 cada dia (ao vivo no Instagram)
    ├─ Planilha única Google Sheets
    ├─ Máximo 12 números por pessoa
    └─ Entrega presencial ou contato posterior

PÓS-EVENTO (14/11+)
    │
    ├─ WhatsApp: Mensagem agradecimento
    ├─ E-mail: Webinar exclusivo convite
    └─ LinkedIn: Conexões + follow-up comercial`}
        </FlowDiagram>

        {/* PRÉ-EVENTO INSTAGRAM */}
        <SectionTitle>📱 CANAL A: INSTAGRAM - &quot;QUAL SEU ARQUÉTIPO DE INOVADOR?&quot;</SectionTitle>

        <SectionTitle level={3}>Pré-Evento (09-11/11)</SectionTitle>
        <Card>
          <CardContent className="pt-6">
            <h4 className="font-semibold mb-3">Post 1 - Sexta 08/11 às 18h</h4>
            <p className="mb-2"><strong>Formato:</strong> Carrossel 3 imagens</p>
            <div className="bg-gray-50 p-4 rounded mt-3 whitespace-pre-wrap font-mono text-sm">
{`Algo grande vem aí no SEBRAE Pró Business... 👀

12 e 13 de novembro. Stand na entrada.
3 marcas. 1 ecossistema de transformação.

Tá preparado?

#SEBRAE #Inovação #Tecnologia`}
            </div>

            <h4 className="font-semibold mt-6 mb-3">Post 2 - Domingo 10/11 às 19h</h4>
            <p className="mb-2"><strong>Formato:</strong> Vídeo 15s (timelapse montagem)</p>
            <div className="bg-gray-50 p-4 rounded mt-3 whitespace-pre-wrap font-mono text-sm">
{`AMANHÃ TEM! 🚀

Stand SMN | GCPro | IFTI
📍 Teatro Pedra do Reino - Entrada
🕐 18h às 22h (12 e 13/11)

Te esperamos pra mostrar que transformação 
digital não é futuro - é AGORA.

E sim, tem sorteio de Alexa. 😏`}
            </div>

            <h4 className="font-semibold mt-6 mb-3">Stories 11/11</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Contagem regressiva (24h, 12h, 6h, 3h, 1h)</li>
              <li>Bastidores da equipe se preparando</li>
              <li>Preview das estações (sem revelar tudo)</li>
              <li>&quot;Amanhã você descobre que tipo de inovador você é&quot;</li>
            </ul>
          </CardContent>
        </Card>

        {/* CARDS PREMIUM */}
        <SectionTitle level={3}>Material Impresso: CARDS PREMIUM</SectionTitle>
        
        <PrintableBox title="ESPECIFICAÇÕES TÉCNICAS">
          <pre className="text-left text-sm whitespace-pre-wrap">
{`Quantidade: 500 unidades
Tamanho: 9x5cm (formato cartão de visita largo)
Material: Papel Supremo 300g
Impressão: 4x4 cores (frente e verso)
Acabamento: Verniz localizado UV no QR Code
Prazo entrega: 11/11 até 12h`}
          </pre>
        </PrintableBox>

        {/* TABELA DE IMPRESSOS COMPLETA */}
        <SectionTitle>🖨️ TODOS OS IMPRESSOS (Checklist Completo)</SectionTitle>
        
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Item</TableHead>
              <TableHead>Qtd</TableHead>
              <TableHead>Tamanho</TableHead>
              <TableHead>Material</TableHead>
              <TableHead>Função</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell><strong>Cards Promotoras</strong></TableCell>
              <TableCell>500</TableCell>
              <TableCell>9x5cm</TableCell>
              <TableCell>Supremo 300g + Verniz UV</TableCell>
              <TableCell>Distribuição ativa entrada → IG quiz</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><strong>QR Gigante Chão</strong></TableCell>
              <TableCell>1</TableCell>
              <TableCell>80x80cm</TableCell>
              <TableCell>Vinil antiderrapante</TableCell>
              <TableCell>Ímã visual, foto, curiosidade → IG quiz</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><strong>Totem A - Entrada Stand</strong></TableCell>
              <TableCell>1</TableCell>
              <TableCell>60x84cm (A1)</TableCell>
              <TableCell>Lona 440g + cavalete</TableCell>
              <TableCell>Boas-vindas + overview ações do stand</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><strong>Totem B - IFTI</strong></TableCell>
              <TableCell>1</TableCell>
              <TableCell>60x84cm (A1)</TableCell>
              <TableCell>Lona 440g + cavalete</TableCell>
              <TableCell>Sinalização estação + CTA cadastro</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><strong>Totem C - GCPro</strong></TableCell>
              <TableCell>1</TableCell>
              <TableCell>60x84cm (A1)</TableCell>
              <TableCell>Lona 440g + cavalete</TableCell>
              <TableCell>Sinalização estação + QR calculadora</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><strong>Backdrop</strong></TableCell>
              <TableCell>1</TableCell>
              <TableCell>4x2,5m</TableCell>
              <TableCell>Lona tensionada</TableCell>
              <TableCell>Identidade visual, fundo fotos</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><strong>Adesivo Balcão</strong></TableCell>
              <TableCell>1</TableCell>
              <TableCell>Sob medida</TableCell>
              <TableCell>Vinil removível</TableCell>
              <TableCell>Frente da mesa → QR agendamento</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><strong>Adesivo Totens Touch</strong></TableCell>
              <TableCell>2</TableCell>
              <TableCell>50x30cm</TableCell>
              <TableCell>Vinil recortado</TableCell>
              <TableCell>Sinalização &quot;Toque aqui&quot; acima da tela</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Alert variant="warning" className="my-6">
          <AlertTitle>📦 ENTREGA GRÁFICA</AlertTitle>
          <AlertDescription>
            Todos os itens devem estar prontos até <strong>11/11 às 12h</strong> (segunda-feira). Penalidade contratual por atraso.
          </AlertDescription>
        </Alert>

        {/* TOTEM FÍSICO */}
        <SectionTitle>🖥️ CANAL B: TOTEM FÍSICO - &quot;TERMÔMETRO DIGITAL&quot;</SectionTitle>

        <SectionTitle level={3}>Estrutura Física</SectionTitle>
        <Card>
          <CardContent className="pt-6">
            <h4 className="font-semibold mb-3">Totems Touchscreen (Aluguel)</h4>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Quantidade:</strong> 2 unidades</li>
              <li><strong>Tipo:</strong> Totem grande com tela touch (Windows OS)</li>
              <li><strong>Tela:</strong> 32&quot; mínimo, orientação vertical</li>
              <li><strong>Altura:</strong> 1,60-1,80m (ergonômico para interação em pé)</li>
              <li><strong>Conexão:</strong> Wi-Fi + cabo ethernet (redundância)</li>
              <li><strong>Browser:</strong> Chrome em fullscreen (kiosk mode)</li>
            </ul>
          </CardContent>
        </Card>

        <TechStackGrid>
          <TechStackItem title="URL">quiz.smn.tec</TechStackItem>
          <TechStackItem title="Hospedagem">Vercel (deploy automático)</TechStackItem>
          <TechStackItem title="Stack">HTML5 + CSS3 + Vanilla JS</TechStackItem>
          <TechStackItem title="Backend">Google Sheets API ou Webhook</TechStackItem>
          <TechStackItem title="Modo">Online obrigatório (IDs únicos)</TechStackItem>
          <TechStackItem title="Responsivo">Otimizado para tela touch vertical</TechStackItem>
        </TechStackGrid>

        {/* ORÇAMENTO COMPLETO */}
        <SectionTitle>💰 ORÇAMENTO DETALHADO</SectionTitle>
        
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Item</TableHead>
              <TableHead>Qtd</TableHead>
              <TableHead>Valor Unit.</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Fornecedor</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell><strong>Kit Impressos Gráfica</strong><br/><small className="text-xs">(cards, QR chão, totens, backdrop, adesivos)</small></TableCell>
              <TableCell>1</TableCell>
              <TableCell>R$ 1.200</TableCell>
              <TableCell>R$ 1.200</TableCell>
              <TableCell>Gráfica Líder JP</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><strong>Letreiro LED SMN</strong><br/><small className="text-xs">(chão, frontal, retroiluminado)</small></TableCell>
              <TableCell>1</TableCell>
              <TableCell>R$ 1.800</TableCell>
              <TableCell>R$ 1.800</TableCell>
              <TableCell>A definir</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><strong>Totens Touchscreen</strong><br/><small className="text-xs">(aluguel 2 dias, Windows, 32&quot;)</small></TableCell>
              <TableCell>2</TableCell>
              <TableCell>R$ 400</TableCell>
              <TableCell>R$ 800</TableCell>
              <TableCell>A definir</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><strong>Móveis Stand</strong><br/><small className="text-xs">(sofá, mesas, banquetas)</small></TableCell>
              <TableCell>Kit</TableCell>
              <TableCell>R$ 600</TableCell>
              <TableCell>R$ 600</TableCell>
              <TableCell>Locação local</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><strong>TVs + Suportes</strong><br/><small className="text-xs">(3 TVs: 43&quot;, 32&quot;, 32&quot;)</small></TableCell>
              <TableCell>3</TableCell>
              <TableCell>R$ 200</TableCell>
              <TableCell>R$ 600</TableCell>
              <TableCell>Locação local</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><strong>Tablets + Suportes</strong><br/><small className="text-xs">(2 para estações)</small></TableCell>
              <TableCell>2</TableCell>
              <TableCell>R$ 150</TableCell>
              <TableCell>R$ 300</TableCell>
              <TableCell>Locação ou uso próprio</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><strong>Brindes Físicos</strong><br/><small className="text-xs">(300 ecobags personalizadas)</small></TableCell>
              <TableCell>300</TableCell>
              <TableCell>R$ 6</TableCell>
              <TableCell>R$ 1.800</TableCell>
              <TableCell>Brindes Paraíba</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><strong>Alexa Echo Show</strong></TableCell>
              <TableCell>2</TableCell>
              <TableCell>R$ 650</TableCell>
              <TableCell>R$ 1.300</TableCell>
              <TableCell>Amazon/Magazine Luiza</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><strong>Internet Dedicada</strong><br/><small className="text-xs">(link 2 dias, 50mb)</small></TableCell>
              <TableCell>1</TableCell>
              <TableCell>R$ 450</TableCell>
              <TableCell>R$ 450</TableCell>
              <TableCell>A confirmar</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><strong>Iluminação LED</strong><br/><small className="text-xs">(fitas RGB backdrop)</small></TableCell>
              <TableCell>10m</TableCell>
              <TableCell>R$ 15</TableCell>
              <TableCell>R$ 150</TableCell>
              <TableCell>Loja local</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><strong>Contingências</strong><br/><small className="text-xs">(15% buffer imprevistos)</small></TableCell>
              <TableCell>-</TableCell>
              <TableCell>-</TableCell>
              <TableCell>R$ 1.350</TableCell>
              <TableCell>-</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <BudgetTotal>INVESTIMENTO TOTAL: R$ 10.350,00</BudgetTotal>

        <Alert variant="warning">
          <AlertTitle>💡 OTIMIZAÇÃO POSSÍVEL</AlertTitle>
          <AlertDescription>
            Se usar equipamentos próprios (TVs, tablets) ao invés de alugar, economia de ~R$ 900. <strong>Total otimizado: R$ 9.450</strong>
          </AlertDescription>
        </Alert>

        {/* TIMELINE COMPLETA */}
        <SectionTitle>⏱️ TIMELINE EXECUTIVA</SectionTitle>

        <Timeline>
          <TimelineItem variant="urgent">
            <strong>🔴 HOJE 03/11 - DECISÃO CRÍTICA</strong><br />
            <strong>20h:</strong> Reunião Go/No-Go (Wagner + Ricardo + Financeiro)<br />
            <strong>21h:</strong> Se GO → Ligar fornecedores (gráfica, estrutura, brindes, internet)<br />
            <strong>22h:</strong> Fechar contratos com multa por atraso<br />
            <strong>23h:</strong> Briefing final equipe via WhatsApp
          </TimelineItem>
          
          <TimelineItem>
            <strong>🟡 04/11 (Terça) - SPRINT TÉCNICO</strong><br />
            <strong>09h-12h:</strong> Wagner → Criar fluxo Manychat completo + testar<br />
            <strong>14h-17h:</strong> Wagner → Desenvolver web app quiz.smn.tec<br />
            <strong>17h-18h:</strong> Wagner → Deploy Vercel + testar online<br />
            <strong>18h-21h:</strong> Wagner → Criar artes para gráfica (todas)<br />
            <strong>23h:</strong> Enviar arquivos para gráfica (deadline fatal)
          </TimelineItem>
          
          <TimelineItem>
            <strong>🟡 05/11 (Quarta) - SPRINT CONTEÚDO</strong><br />
            <strong>09h-12h:</strong> Designer → Vídeo GCPro &quot;Antes x Depois&quot; (motion)<br />
            <strong>12h-14h:</strong> Wagner → Produzir 3 brindes digitais (e-book, template, prompts)<br />
            <strong>14h-17h:</strong> Designer → Posts Instagram e LinkedIn (4 posts)<br />
            <strong>17h-18h:</strong> Wagner → Configurar Zapier/Make (Sheets integração)<br />
            <strong>18h-20h:</strong> Wagner → Testar TUDO fim-a-fim<br />
            <strong>20h:</strong> Backup completo em pen drive (2 cópias)
          </TimelineItem>
          
          <TimelineItem>
            <strong>🟢 06-09/11 (Qui-Dom) - VIAGEM</strong><br />
            Wagner e Ricardo viajam<br />
            <small className="text-sm">Equipe local: confirmar entrega gráfica agendada para 11/11</small>
          </TimelineItem>
          
          <TimelineItem>
            <strong>🟢 10/11 (Domingo) - RETORNO</strong><br />
            <strong>19h:</strong> Wagner retorna<br />
            <strong>20h:</strong> Checklist geral remoto (tudo ok?)<br />
            <strong>21h:</strong> Postar Story teaser &quot;Amanhã tem!&quot;
          </TimelineItem>
          
          <TimelineItem>
            <strong>🟢 11/11 (Segunda) - DIA DO SETUP</strong><br />
            <strong>10h:</strong> Confirmar gráfica entregou todos impressos<br />
            <strong>12h:</strong> Conferir materiais (checklist físico)<br />
            <strong>14h:</strong> Ir ao local, testar internet (CRÍTICO)<br />
            <strong>15h:</strong> Testar totens online (acessar quiz.smn.tec)<br />
            <strong>16h:</strong> Testar Manychat (enviar mensagem teste)<br />
            <strong>17h:</strong> Treino rápido equipe (1h - script + FAQ)<br />
            <strong>18h:</strong> Montagem estrutura física do stand<br />
            <strong>20h:</strong> Teste geral integrado (simular jornada completa)<br />
            <strong>21h:</strong> Ajustes finais + descanso
          </TimelineItem>
          
          <TimelineItem variant="done">
            <strong>🎪 12/11 (Quarta) - DIA 1 EVENTO</strong><br />
            <strong>17h:</strong> Equipe chega, últimos ajustes<br />
            <strong>17h30:</strong> Briefing rápido 15min<br />
            <strong>18h:</strong> ABERTURA - Promotoras ativas na entrada<br />
            <strong>20h:</strong> Avaliar fluxo, ajustar se necessário<br />
            <strong>21h30:</strong> Preparar sorteio (abrir planilha)<br />
            <strong>21h45:</strong> SORTEIO AO VIVO Instagram<br />
            <strong>22h:</strong> Encerramento + organização para dia 2
          </TimelineItem>
          
          <TimelineItem variant="done">
            <strong>🎪 13/11 (Quinta) - DIA 2 EVENTO</strong><br />
            <strong>17h:</strong> Equipe chega, reposição materiais se necessário<br />
            <strong>17h30:</strong> Alinhamento rápido baseado em dia 1<br />
            <strong>18h:</strong> ABERTURA<br />
            <strong>21h45:</strong> SORTEIO FINAL<br />
            <strong>22h:</strong> Encerramento<br />
            <strong>22h-23h:</strong> Desmontagem e recolhimento equipamentos
          </TimelineItem>
        </Timeline>

        {/* CRITÉRIOS GO/NO-GO */}
        <SectionTitle>✅ CRITÉRIOS DE DECISÃO GO / NO-GO</SectionTitle>

        <Card>
          <CardHeader>
            <CardTitle>Checklist de Viabilidade (HOJE até 20h)</CardTitle>
          </CardHeader>
          <CardContent>
            <Checklist>
              <ChecklistItem>
                <strong>Orçamento R$ 9-10k aprovado?</strong> (sem aprovação = NO-GO imediato)
              </ChecklistItem>
              <ChecklistItem>
                <strong>Gráfica aceita prazo de entrega 11/11 às 12h?</strong> (com multa contratual por atraso)
              </ChecklistItem>
              <ChecklistItem>
                <strong>Fornecedor de estrutura garante montagem até 11/11 20h?</strong>
              </ChecklistItem>
              <ChecklistItem>
                <strong>Wagner confirma viabilidade técnica em 2 dias?</strong> (Manychat + Web App)
              </ChecklistItem>
              <ChecklistItem>
                <strong>Internet dedicada confirmada para o local?</strong> (backup: 4G ilimitado)
              </ChecklistItem>
              <ChecklistItem>
                <strong>Mínimo 4 pessoas da equipe confirmadas para 12-13/11?</strong>
              </ChecklistItem>
              <ChecklistItem>
                <strong>Ricardo disponível 100% nos 2 dias de evento?</strong>
              </ChecklistItem>
            </Checklist>

            <div className="mt-8 p-6 bg-green-50 rounded-lg">
              <strong className="text-xl">✅ SE TODOS OS ITENS = SIM</strong><br />
              → GO! Ligar fornecedores IMEDIATAMENTE<br />
              → Iniciar produção amanhã cedo (04/11)
            </div>
            
            <div className="mt-4 p-6 bg-red-50 rounded-lg">
              <strong className="text-xl">❌ SE 1 OU MAIS = NÃO</strong><br />
              → NO-GO. Melhor não fazer com qualidade comprometida<br />
              → Alternativa: presença institucional simples (sem dinâmicas)
            </div>
          </CardContent>
        </Card>

        {/* MÉTRICAS DE SUCESSO */}
        <SectionTitle>📊 MÉTRICAS DE SUCESSO</SectionTitle>

        <Card>
          <CardHeader>
            <CardTitle>Obrigatórias (Mínimo para considerar &quot;sucesso&quot;)</CardTitle>
          </CardHeader>
          <CardContent>
            <Checklist>
              <ChecklistItem>200+ leads capturados (nome + contato válido)</ChecklistItem>
              <ChecklistItem>30+ posts no Instagram marcando @smn.tec</ChecklistItem>
              <ChecklistItem>10+ fotos/vídeos de pessoas no stand circulando nas redes</ChecklistItem>
              <ChecklistItem>5+ agendamentos de reunião pós-evento</ChecklistItem>
              <ChecklistItem>0 problemas técnicos críticos (internet, totens, sorteio)</ChecklistItem>
            </Checklist>
            
            <h4 className="font-semibold mt-6 mb-3">Bônus (Excelência)</h4>
            <Checklist>
              <ChecklistItem>Menção de influencer ou palestrante do evento</ChecklistItem>
              <ChecklistItem>Reportagem em mídia local (jornal, portal, TV)</ChecklistItem>
              <ChecklistItem>Stand comentado como &quot;mais inovador&quot; por visitantes</ChecklistItem>
              <ChecklistItem>10+ empresas grandes (C-level) interagindo no stand</ChecklistItem>
              <ChecklistItem>Taxa de conversão quiz→lead &gt; 80%</ChecklistItem>
            </Checklist>
          </CardContent>
        </Card>

        {/* PRÓXIMOS 30 MINUTOS */}
        <SectionTitle>✅ PRÓXIMOS 30 MINUTOS</SectionTitle>

        <Card className="bg-gradient-to-br from-primary to-blue-800 text-white">
          <CardHeader>
            <CardTitle className="text-white text-2xl">AÇÕES IMEDIATAS</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal list-inside space-y-4 text-lg">
              <li><strong>Ler este documento completo</strong> (15 min)</li>
              <li><strong>Reunir:</strong> Wagner + Ricardo + Decisor Financeiro (10 min)</li>
              <li>
                <strong>Decidir:</strong> Vai ou não vai? (5 min)
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>Aprovar orçamento R$ 9-10k?</li>
                  <li>Wagner consegue entregar técnico em 2 dias?</li>
                  <li>Equipe disponível?</li>
                </ul>
              </li>
            </ol>
            
            <div className="mt-6 p-5 bg-white/20 rounded-lg backdrop-blur">
              <strong className="text-xl">SE GO:</strong><br />
              <strong>Ligar fornecedores AGORA</strong> (gráfica, estrutura, internet, brindes)<br />
              <strong>Iniciar produção AMANHÃ 09h</strong> (Wagner sprint técnico)
            </div>
            
            <div className="mt-4 p-5 bg-white/20 rounded-lg backdrop-blur">
              <strong className="text-xl">SE NO-GO:</strong><br />
              Aceitar e planejar presença institucional simples<br />
              (sem dinâmicas, só branding e networking natural)
            </div>
          </CardContent>
        </Card>

        {/* FOOTER */}
        <div className="mt-16 pt-8 border-t-4 border-primary text-center text-gray-600">
          <p><strong>Documento preparado por Wagner Lima</strong></p>
          <p>Data: 03/11/2025 | Versão Final</p>
          <p className="mt-6 italic">
            &quot;Excelência é fazer bem feito mesmo quando ninguém está vendo.&quot;
          </p>
        </div>

      </div>
    </div>
  )
}
