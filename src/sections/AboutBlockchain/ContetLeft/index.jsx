import { ContentLeftContainer } from "./style";

export default function ContentLeft() {
  return (
    <ContentLeftContainer>
      <div>
        <h1 className="text-lg font-semibold ">
          What is blockchain, and how does it work?
        </h1>
        <p>
          Blockchain is a decentralized, distributed ledger technology that
          records transactions across a network of computers. Each transaction
          is stored in a "block," which is then linked to the previous block,
          forming a chain. This decentralized nature ensures transparency and
          security.
        </p>
      </div>
      <div>
        <h1 className="text-lg font-semibold ">
          What are smart contracts, and how do they function within blockchain?
        </h1>
        <p>
          Smart contracts are self-executing contracts with predefined terms
          written in code. They automatically execute when conditions are met,
          eliminating the need for intermediaries and enhancing efficiency and
          trust. What is DeFi (Decentralized Finance), and how does it utilize
          blockchain? DeFi refers to a range of financial services built on
          blockchain technology, enabling peer-to-peer lending, borrowing,
          trading, and more without traditional intermediaries. It leverages
          smart contracts to automate processes securely and transparently.
        </p>
      </div>
      <div>
        <h1 className="text-lg font-semibold ">
          What is Web3, and how does it relate to blockchain?
        </h1>
        <p>
          Web3 represents the vision of a decentralized internet, where users
          have greater control over their data and interactions. It harnesses
          blockchain technology to create decentralized applications (dApps) and
          foster a more open, transparent digital ecosystem.
        </p>
      </div>
      <div>
        <h1 className="text-lg font-semibold ">
          What role do cryptocurrencies play in blockchain technology?
        </h1>
        <p>
          Cryptocurrencies are digital assets built on blockchain, enabling
          secure peer-to-peer transactions without intermediaries. Bitcoin and
          Ethereum are prominent examples, showcasing the potential of
          blockchain in revolutionizing finance and beyond.
        </p>
      </div>
      <div>
        <h1 className="text-lg font-semibold ">
          How do coins and tokens differ in their infrastructure and purpose
          within blockchain networks?
        </h1>
        <p>
          A coin typically refers to a cryptocurrency native to its own
          blockchain network. Examples include Bitcoin (BTC) and Ethereum (ETH),
          which have their respective blockchain platforms. Coins are used
          primarily as a medium of exchange within their native networks. They
          can be traded, transferred, and used to pay for goods and services.
        </p>
        <p>
          Coins usually have their own blockchain and operate independently of
          other platforms. Token: Tokens, on the other hand, are digital assets
          built on existing blockchain platforms. They do not have their own
          blockchain but instead utilize the infrastructure of another
          blockchain network, such as Ethereum.
        </p>
        <p>
          Tokens can represent various assets, including digital currencies,
          real-world assets, utility, or security. Examples include ERC-20
          tokens like Chainlink (LINK) and Tether (USDT). Tokens are often
          created through smart contracts and can serve different functions
          within their respective ecosystems, such as providing access to
          services, voting rights, or representing ownership of assets.
        </p>
        <p>
          In utilizing the native NOW coin on its network, NOW Blockchain
          operates with its dedicated blockchain platform, where the NOW coin
          functions as the primary cryptocurrency, facilitating transactions and
          activities for users within the ecosystem.
        </p>
      </div>
      <div>
        <h1 className="text-lg font-semibold ">
          How does blockchain ensure security?
        </h1>
        <p>
          Blockchain ensures security through decentralization, cryptographic
          encryption, immutability (transactions cannot be altered), and
          consensus mechanisms that validate transactions and maintain the
          integrity of the ledger. What are the weaknesses of blockchain
          technology? Blockchain faces challenges such as the potential for 51%
          attacks (where a majority control of network power can manipulate
          transactions), vulnerabilities in smart contracts leading to exploits,
          scalability issues, and regulatory uncertainties.
        </p>
      </div>
      <div>
        <h1 className="text-lg font-semibold ">
          How is blockchain evolving to address its weaknesses?
        </h1>
        <p>
          Efforts are underway to enhance blockchain scalability, improve smart
          contract security through auditing and standardization, and
          collaborate with regulators to establish clearer guidelines.
          Additionally, advancements in consensus mechanisms aim to bolster
          network security.
        </p>
        <p>
          What are the potential applications of blockchain beyond finance?
          Blockchain's versatility extends to various industries, including
          supply chain management, healthcare, voting systems, digital identity
          verification, and more. Its transparent, tamper-resistant nature makes
          it invaluable for enhancing trust and efficiency in diverse sectors.
        </p>
        <p>
          By exploring these questions, we gain a deeper understanding of
          blockchain technology and its multifaceted implications for the future
          of digital innovation. As the landscape continues to evolve, embracing
          blockchain's potential while addressing its challenges will be crucial
          in unlocking its full transformative power.
        </p>
      </div>
    </ContentLeftContainer>
  );
}
