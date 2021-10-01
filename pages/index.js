import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hydroponic System</title>
        <meta name="description" content="hydroponic system parts list" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="px-8 w-screen">
        <h1>Materials &amp; Parts List</h1>
        <a
          className="block text-sm my-4 hover:underline"
          href="https://kylegabriel.com/projects/2020/06/automated-hydroponic-system-build.html"
        >
          Link to original article
        </a>
        <p>
          Each part of building and operating the hydroponic system will be
          covered in detail. As needs vary, so too will the choice of materials
          one incorporates into his or her system. The materials list below is
          only meant to provide a complete list of the components used in this
          particular build.
        </p>

        <h2>Tools (Essential)</h2>
        <p>
          These tools are the minimum required to build this system, unless you
          want to adopt some creative fabrication techniques.
        </p>
        <figure className="mt-4">
          <table>
            <thead>
              <tr>
                <th className="text-left">Description</th>
                <th className="text-left">Purchase</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="pr-4">Soldering Iron</td>
                <td className="pr-4">
                  <a
                    href="https://amzn.to/3oUVrs4"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Amazon
                  </a>
                </td>
              </tr>
              <tr>
                <td className="pr-4">Solder</td>
                <td className="pr-4">
                  <a
                    href="https://amzn.to/3yGEINp"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Amazon
                  </a>
                </td>
              </tr>
              <tr>
                <td className="pr-4">Saw or Dremel with Cutting Kit</td>
                <td className="pr-4">
                  <a
                    href="https://amzn.to/34mffuW"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Amazon
                  </a>
                  ,{" "}
                  <a
                    href="https://amzn.to/3fHbG7K"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Amazon
                  </a>
                </td>
              </tr>
              <tr>
                <td className="pr-4">Heat Gun</td>
                <td className="pr-4">
                  <a
                    href="https://amzn.to/2StfYaP"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Amazon
                  </a>
                </td>
              </tr>
              <tr>
                <td className="pr-4">Cordless Drill</td>
                <td className="pr-4">
                  <a
                    href="https://amzn.to/3yG8dis"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Amazon
                  </a>
                </td>
              </tr>
              <tr>
                <td className="pr-4">Drill Bit Set (16-Piece)</td>
                <td className="pr-4">
                  <a
                    href="https://amzn.to/3fP4VAU"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Amazon
                  </a>
                </td>
              </tr>
              <tr>
                <td className="pr-4">Step Drill Bit (1/4 to 1 3/8 in.)</td>
                <td className="pr-4">
                  <a
                    href="https://amzn.to/3yF1EMV"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Amazon
                  </a>
                </td>
              </tr>
              <tr>
                <td className="pr-4">1 3/4 in. Hole Saw Bit</td>
                <td className="pr-4">
                  <a
                    href="https://amzn.to/3fNKjJd"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Amazon
                  </a>
                </td>
              </tr>
              <tr>
                <td className="pr-4">Screwdriver Set</td>
                <td className="pr-4"></td>
              </tr>
              <tr>
                <td className="pr-4">Thread Seal Tape</td>
                <td className="pr-4">
                  <a
                    href="https://www.homedepot.com/p/1-2-in-x-520-in-Thread-Seal-Tape-31273/202206819"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Home Depot
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </figure>
        <h2>Tools (Non-Essential)</h2>
        <p>
          These tools aren’t required to build the system but are useful for
          verifying measurements and tuning the system.
        </p>
        <figure className="mt-4">
          <table>
            <thead>
              <tr>
                <th className="text-left">Description</th>
                <th className="text-left">Purchase</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="pr-4">
                  Photosynthetically active radiation (PAR) Meter
                </td>
                <td className="pr-4">
                  <a
                    href="https://amzn.to/2QWynwo"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Amazon
                  </a>
                </td>
              </tr>
              <tr>
                <td className="pr-4">Clamp Electrical Current Meter</td>
                <td className="pr-4">
                  <a
                    href="https://amzn.to/3fmegRG"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Amazon
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </figure>
        <h2>Base Hydroponic System</h2>
        <p>
          These are the components necessary to build the base hydroponic system
          that can operate to grow crops but will need to be manually operated.
          The materials further below will automate various parts of the system.
        </p>
        <figure className="mt-4">
          <table>
            <thead>
              <tr>
                <th className="text-left">
                  {" "}
                  <strong>Description</strong>
                </th>
                <th className="text-left">Purchase</th>
                <th className="text-left">Quantity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="pr-4">Grow Tent</td>
                <td className="pr-4">
                  <a
                    href="https://amzn.to/3yDK9g5"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Amazon
                  </a>
                </td>
                <td className="pr-4">1</td>
              </tr>
              <tr>
                <td className="pr-4">Grow Light</td>
                <td className="pr-4">
                  <a
                    href="https://amzn.to/2RLIapi"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Amazon
                  </a>
                </td>
                <td className="pr-4">1</td>
              </tr>
              <tr>
                <td className="pr-4">Microtube Grommet</td>
                <td className="pr-4">
                  <a
                    href="https://shop.amhydro.com/products/amhydro-microtube-grommet-id-1-4-in-od-3-8-in"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    AmHydro
                  </a>
                </td>
                <td className="pr-4">6</td>
              </tr>
              <tr>
                <td className="pr-4">Microtube</td>
                <td className="pr-4">
                  <a
                    href="https://shop.amhydro.com/products/amhydro-microtube-1-4-in-x-16-in"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    AmHydro
                  </a>
                </td>
                <td className="pr-4">6</td>
              </tr>
              <tr>
                <td className="pr-4">2 in. x 3 in. Vinyl Downspout</td>
                <td className="pr-4">
                  <a
                    href="https://www.homedepot.com/p/Amerimax-Home-Products-2-in-x-3-in-x-120-in-White-Vinyl-Downspout-M0593/100095267"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Home Depot
                  </a>
                </td>
                <td className="pr-4">1</td>
              </tr>
              <tr>
                <td className="pr-4">4 in. PVC Sewer and Drain Pipe</td>
                <td className="pr-4">
                  <a href="https://www.homedepot.com/p/JM-eagle-4-in-x-10-ft-PVC-D2729-Sewer-and-Drain-Pipe-1610/202280933">
                    Home Depot
                  </a>
                </td>
                <td className="pr-4">1</td>
              </tr>
              <tr>
                <td className="pr-4">4 in. PVC Sewer and Drain Cap</td>
                <td className="pr-4">
                  <a
                    href="https://www.homedepot.com/p/NDS-4-in-PVC-Sewer-and-Drain-Cap-4P06/100172701"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Home Depot
                  </a>
                </td>
                <td className="pr-4">2</td>
              </tr>
              <tr>
                <td className="pr-4">3/4 in. Bulkhead Union</td>
                <td className="pr-4">
                  <a
                    href="https://www.homedepot.com/p/Everbilt-3-4-in-FIP-Barrel-Bulkhead-Union-with-EPDM-Washer-Fitting-800479/207176307"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Home Depot
                  </a>
                </td>
                <td className="pr-4">1</td>
              </tr>
              <tr>
                <td className="pr-4">
                  1 1/2 in. ID Swimming Pool Hose (2 feet)
                </td>
                <td className="pr-4">
                  <a
                    href="https://www.homedepot.com/p/HDX-35-ft-x-1-5-in-Swimming-Pool-Vacuum-Hose-69235/203796282"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Home Depot
                  </a>
                </td>
                <td className="pr-4">1</td>
              </tr>
              <tr>
                <td className="pr-4">1 in. PVC Pipe</td>
                <td className="pr-4">
                  <a
                    href="https://www.homedepot.com/p/1-in-x-10-ft-PVC-Schedule-40-Plain-End-Pipe-531194/202280936"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Home Depot
                  </a>
                </td>
                <td className="pr-4">1</td>
              </tr>
              <tr>
                <td className="pr-4">1 in. PVC End Cap</td>
                <td className="pr-4">
                  <a
                    href="https://www.homedepot.com/p/Charlotte-Pipe-1-in-PVC-Sch-40-Socket-Cap-PVC021161000HD/203818100"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Home Depot
                  </a>
                </td>
                <td className="pr-4">2</td>
              </tr>
              <tr>
                <td className="pr-4">
                  1 in. x 1 in. x 1/2 in. PVC Tee (S x S x FPT)
                </td>
                <td className="pr-4">
                  <a
                    href="https://www.homedepot.com/p/Charlotte-Pipe-1-in-x-1-in-x-1-2-in-PVC-Sch-40-S-x-S-x-FPT-Red-Tee-PVC024013200HD/203812423"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Home Depot
                  </a>
                </td>
                <td className="pr-4">1</td>
              </tr>
              <tr>
                <td className="pr-4">
                  1/2 in. ID x 1/2 in. MIP Plastic Hose Barb Adapter Fitting
                </td>
                <td className="pr-4">
                  <a
                    href="https://www.homedepot.com/p/Everbilt-1-2-in-ID-x-1-2-in-MIP-Plastic-Hose-Barb-Adapter-Fitting-800409/300862730"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Home Depot
                  </a>
                </td>
                <td className="pr-4">1</td>
              </tr>
              <tr>
                <td className="pr-4">10 Gallon Bin</td>
                <td className="pr-4">
                  <a
                    href="https://www.homedepot.com/p/Husky-Heavy-Duty-10-Gal-Storage-Tote-with-Lid-235596/303083131"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Home Depot
                  </a>
                </td>
                <td className="pr-4">1</td>
              </tr>
              <tr>
                <td className="pr-4">Submersible Water Pump</td>
                <td className="pr-4">
                  <a
                    href="https://amzn.to/3oSr0Ta"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Amazon
                  </a>
                </td>
                <td className="pr-4">1</td>
              </tr>
              <tr>
                <td className="pr-4">1/2 in. ID Clear Vinyl Tubing</td>
                <td className="pr-4">
                  <a
                    href="https://www.homedepot.com/p/UDP-1-2-in-I-D-x-5-8-in-O-D-x-10-ft-Clear-Vinyl-Tubing-T10006010/304185142"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Home Depot
                  </a>
                </td>
                <td className="pr-4">1</td>
              </tr>
              <tr>
                <td className="pr-4">
                  Stainless-Steel Hose Clamp (3/8 in. – 7/8 in.)
                </td>
                <td className="pr-4">
                  <a
                    href="https://www.homedepot.com/p/Everbilt-3-8-in-7-8-in-Stainless-Steel-Hose-Clamp-6760595/206261538"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Home Depot
                  </a>
                </td>
                <td className="pr-4">1</td>
              </tr>
              <tr>
                <td className="pr-4">
                  Stainless-Steel Hose Clamp (3/4 in. – 1 3/4 in.)
                </td>
                <td className="pr-4">
                  <a
                    href="https://www.homedepot.com/p/Everbilt-3-4-in-1-3-4-in-Stainless-Steel-Hose-Clamp-6720595/202309386"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Home Depot
                  </a>
                </td>
                <td className="pr-4">1</td>
              </tr>
              <tr>
                <td className="pr-4">Nylon Filter Bags</td>
                <td className="pr-4">
                  <a
                    href="https://amzn.to/3fLhDjX"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Amazon
                  </a>
                </td>
                <td className="pr-4">1 Pack</td>
              </tr>
              <tr>
                <td className="pr-4">
                  Plant Growth Nutrient Solutions (Two Part, A and B)
                </td>
                <td className="pr-4">
                  <a
                    href="https://amzn.to/3wAsTXb"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Amazon
                  </a>
                </td>
                <td className="pr-4">1</td>
              </tr>
              <tr>
                <td className="pr-4">
                  pH Adjustment Solutions (Up/Base and Down/Acid)
                </td>
                <td className="pr-4">
                  <a
                    href="https://amzn.to/34iiQKb"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Amazon
                  </a>
                </td>
                <td className="pr-4">1</td>
              </tr>
              <tr>
                <td className="pr-4">
                  Mycostop Biocontrol (<em>Streptomyces griseoviridis</em>{" "}
                  bacteria)
                </td>
                <td className="pr-4">
                  <a
                    href="https://amzn.to/3wE3jR1"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Amazon
                  </a>
                </td>
                <td className="pr-4">2 Grams</td>
              </tr>
            </tbody>
          </table>
        </figure>
        <h2>Planting</h2>
        <p>These are the materials for germinating and growing plants.</p>
        <figure className="mt-4">
          <table>
            <thead>
              <tr>
                <th className="text-left">Description</th>
                <th className="text-left">Purchase</th>
                <th className="text-left">Quantity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="pr-4">Seeds</td>
                <td className="pr-4">
                  <a
                    href="https://www.johnnyseeds.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Johnny’s
                  </a>
                </td>
                <td className="pr-4">Choose</td>
              </tr>
              <tr>
                <td className="pr-4">Rockwool Grow Cubes or Horticubes</td>
                <td className="pr-4">
                  <a
                    href="https://amzn.to/2SyQWa8"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Amazon
                  </a>
                  ,{" "}
                  <a
                    href="https://amzn.to/34l7KEA"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Amazon
                  </a>
                </td>
                <td className="pr-4">1 Pack</td>
              </tr>
              <tr>
                <td className="pr-4">Seed Germination Tray and Dome</td>
                <td className="pr-4">
                  <a
                    href="https://amzn.to/3vvrLUU"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Amazon
                  </a>
                </td>
                <td className="pr-4">1</td>
              </tr>
              <tr>
                <td className="pr-4">Waterproof Seedling Heat Mat</td>
                <td className="pr-4">
                  <a
                    href="https://amzn.to/3oW5Nb8"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Amazon
                  </a>
                </td>
                <td className="pr-4">1</td>
              </tr>
            </tbody>
          </table>
        </figure>
        <h2>Environmental Monitoring and Regulation System</h2>
        <figure className="mt-4">
          <table>
            <thead>
              <tr>
                <th className="text-left">Description</th>
                <th className="text-left">Purchase</th>
                <th className="text-left">Quantity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="pr-4">
                  Raspberry Pi v3 or Raspberry Pi v4 (only one, not both; v4
                  recommended){" "}
                </td>
                <td className="pr-4">
                  <a
                    href="https://amzn.to/3hVGyUQ"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Amazon Pi 3
                  </a>
                  ,{" "}
                  <a
                    href="https://amzn.to/3fnUoxB"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Amazon Pi 4
                  </a>
                  ,{" "}
                  <a
                    href="https://www.banggood.com/custlink/GKDRO6bevq"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Bangood
                  </a>
                </td>
                <td className="pr-4">1</td>
              </tr>
              <tr>
                <td className="pr-4">Micro SD Card (32 GB)</td>
                <td className="pr-4">
                  <a
                    href="https://amzn.to/3oQQpg9"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Amazon
                  </a>
                </td>
                <td className="pr-4">1</td>
              </tr>
              <tr>
                <td className="pr-4">Raspberry Pi v2 Camera Module</td>
                <td className="pr-4">
                  <a
                    href="https://amzn.to/3oZCNPB"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Amazon
                  </a>
                  ,{" "}
                  <a
                    href="https://www.banggood.com/custlink/KmKEa0sem7"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Bangood
                  </a>
                </td>
                <td className="pr-4">1</td>
              </tr>
              <tr>
                <td className="pr-4">Raspberry Pi Camera Ribbon Cable</td>
                <td className="pr-4">
                  <a
                    href="https://amzn.to/3yQxWoy"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Amazon
                  </a>
                </td>
                <td className="pr-4">1</td>
              </tr>
              <tr>
                <td className="pr-4">HDPE Plastic Mounting Panel</td>
                <td className="pr-4">
                  <a
                    href="https://amzn.to/34l4Z6c"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Amazon
                  </a>
                </td>
                <td className="pr-4">1</td>
              </tr>
              <tr>
                <td className="pr-4">6-Outlet Power Strip</td>
                <td className="pr-4"></td>
                <td className="pr-4">1</td>
              </tr>
              <tr>
                <td className="pr-4">
                  20 character, 4 line I<sup>2</sup>C LCD
                </td>
                <td className="pr-4">
                  <a
                    href="https://amzn.to/3oPtWju"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Amazon
                  </a>
                  ,{" "}
                  <a
                    href="https://www.banggood.com/custlink/vGvELgA4Y3"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Bangood
                  </a>
                </td>
                <td className="pr-4">1</td>
              </tr>
              <tr>
                <td className="pr-4">#1 x 7/16 in. Stainless Steel Screws</td>
                <td className="pr-4">
                  <a
                    href="https://amzn.to/34lvmsA"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Amazon
                  </a>
                </td>
                <td className="pr-4">1 Pack</td>
              </tr>
              <tr>
                <td className="pr-4">
                  Round Nylon Spacers (H 6 mm, OD 7 mm, ID 4 mm)
                </td>
                <td className="pr-4">
                  <a
                    href="https://amzn.to/3fOPCIi"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Amazon
                  </a>
                  ,{" "}
                  <a
                    href="https://www.banggood.com/custlink/DmmYLeQ4RL"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Bangood
                  </a>
                </td>
                <td className="pr-4">1 Pack</td>
              </tr>
              <tr>
                <td className="pr-4">Mini Breadboards</td>
                <td className="pr-4">
                  <a
                    href="https://amzn.to/3vjOMKd"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Amazon
                  </a>
                  ,{" "}
                  <a
                    href="https://www.banggood.com/custlink/DGvYl6beEc"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Bangood
                  </a>
                </td>
                <td className="pr-4">1 Pack</td>
              </tr>
              <tr>
                <td className="pr-4">Jumper Wire Kit</td>
                <td className="pr-4">
                  <a
                    href="https://amzn.to/3uuTAeI"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Amazon
                  </a>
                  ,{" "}
                  <a
                    href="https://www.banggood.com/custlink/mKvEo0bBYt"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Bangood
                  </a>
                </td>
                <td className="pr-4">1 Pack</td>
              </tr>
            </tbody>
          </table>
        </figure>
        <h2>Power Control Box</h2>
        <p>
          These materials are for building a power control box that has 4
          individually-controllable outlets, allowing any 120 VAC device to be
          controlled by the automation system.
        </p>
        <figure className="mt-4">
          <table>
            <thead>
              <tr>
                <th className="text-left">
                  {" "}
                  <strong>Description</strong>
                </th>
                <th className="text-left">Purchase</th>
                <th className="text-left">Quantity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="pr-4">6 in. x 6 in. Junction Box</td>
                <td className="pr-4">
                  <a
                    href="https://www.homedepot.com/p/Carlon-6-in-x-6-in-x-4-in-Gray-PVC-Junction-Box-E987RR/100404096"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Home Depot
                  </a>
                </td>
                <td className="pr-4">1</td>
              </tr>
              <tr>
                <td className="pr-4">RJ45 Panel Mount Connector</td>
                <td className="pr-4">
                  <a
                    href="https://amzn.to/34p6FLC"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Amazon
                  </a>
                </td>
                <td className="pr-4">1</td>
              </tr>
              <tr>
                <td className="pr-4">RJ45 Surface Mount Jack</td>
                <td className="pr-4">
                  <a
                    href="https://amzn.to/3bWaNai"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Amazon
                  </a>
                </td>
                <td className="pr-4">1</td>
              </tr>
              <tr>
                <td className="pr-4">
                  RJ45 Crimper, Connectors, and Cable Test Tools
                </td>
                <td className="pr-4">
                  <a
                    href="https://amzn.to/3vCc26x"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Amazon
                  </a>
                </td>
                <td className="pr-4">1</td>
              </tr>
              <tr>
                <td className="pr-4">RJ45 CAT-6 Ethernet Cable (5-foot)</td>
                <td className="pr-4"></td>
                <td className="pr-4">1</td>
              </tr>
              <tr>
                <td className="pr-4">IEC 320 Panel Mount Power Socket</td>
                <td className="pr-4">
                  <a
                    href="https://amzn.to/2REvyR3"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Amazon
                  </a>
                </td>
                <td className="pr-4">1 Pack</td>
              </tr>
              <tr>
                <td className="pr-4">IEC 320 Power Cord</td>
                <td className="pr-4">
                  <a
                    href="https://amzn.to/2SzDtPK"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Amazon
                  </a>
                </td>
                <td className="pr-4">1</td>
              </tr>
              <tr>
                <td className="pr-4">Wall Outlets</td>
                <td className="pr-4">
                  <a
                    href="https://www.homedepot.com/p/Leviton-Decora-15-Amp-Residential-Grade-Self-Grounding-Duplex-Outlet-Gray-R54-05325-0GS/100117108"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Home Depot
                  </a>
                </td>
                <td className="pr-4">2</td>
              </tr>
              <tr>
                <td className="pr-4">2-Gang Wall Plate</td>
                <td className="pr-4">
                  <a
                    href="https://www.homedepot.com/p/Leviton-Decora-2-Gang-Midway-Nylon-Wall-Plate-Gray-R54-PJ262-0GY/202059892"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Home Depot
                  </a>
                </td>
                <td className="pr-4">1</td>
              </tr>
              <tr>
                <td className="pr-4">
                  2-Channel Relay Module (Mechanical, 10-Amp)
                </td>
                <td className="pr-4">
                  <a
                    href="https://amzn.to/3voJWLT"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Amazon
                  </a>
                </td>
                <td className="pr-4">1</td>
              </tr>
              <tr>
                <td className="pr-4">
                  2-Channel Relay Module (Solid State, 2-Amp)
                </td>
                <td className="pr-4">
                  <a
                    href="https://amzn.to/34ig7R6"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Amazon
                  </a>
                </td>
                <td className="pr-4">1</td>
              </tr>
              <tr>
                <td className="pr-4">14 Gauge Copper Wire</td>
                <td className="pr-4">
                  <a
                    href="https://www.homedepot.com/p/Southwire-25-ft-14-Black-Stranded-CU-THHN-Wire-22955985/301084071"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Home Depot
                  </a>
                </td>
                <td className="pr-4">1 Spool</td>
              </tr>
            </tbody>
          </table>
        </figure>
        <h2>Water Condition Sensing</h2>
        <p>
          These materials enable various water chemistry to be measured and
          provides feedback for the water dosing system.
        </p>
        <figure className="mt-4">
          <table>
            <thead>
              <tr>
                <th className="text-left">
                  {" "}
                  <strong>Description</strong>
                </th>
                <th className="text-left">Purchase</th>
                <th className="text-left">Quantity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="pr-4">
                  Atlas Scientific PT-1000 Temperature Sensor Kit
                </td>
                <td className="pr-4">
                  <a
                    href="https://amzn.to/3fm3z1h"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Amazon
                  </a>
                </td>
                <td className="pr-4">1</td>
              </tr>
              <tr>
                <td className="pr-4">
                  Atlas Scientific EZO Carrier Board (for Temperature Sensor)
                </td>
                <td className="pr-4">
                  <a
                    href="https://amzn.to/3fm9Z0o"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Amazon
                  </a>
                </td>
                <td className="pr-4">1</td>
              </tr>
              <tr>
                <td className="pr-4">Atlas Scientific pH Sensor Kit</td>
                <td className="pr-4">
                  <a
                    href="https://amzn.to/3oQLtb5"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Amazon
                  </a>
                </td>
                <td className="pr-4">1</td>
              </tr>
              <tr>
                <td className="pr-4">
                  Atlas Scientific Electrical Conductivity Sensor Kit
                </td>
                <td className="pr-4">
                  <a
                    href="https://amzn.to/3g2T5TZ"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Amazon
                  </a>
                </td>
                <td className="pr-4">1</td>
              </tr>
              <tr>
                <td className="pr-4">Aquarium Specimen Container</td>
                <td className="pr-4">
                  <a
                    href="https://amzn.to/3umFEmU"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Amazon
                  </a>
                </td>
                <td className="pr-4">1</td>
              </tr>
            </tbody>
          </table>
        </figure>
        <h2>Water Dosing</h2>
        <p>
          These materials enable the water chemistry to be adjusted by
          dispensing different liquid solutions.
        </p>
        <figure className="mt-4">
          <table>
            <thead>
              <tr>
                <th className="text-left">Description</th>
                <th className="text-left">Purchase</th>
                <th className="text-left">Quantity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="pr-4">Atlas Scientific Peristaltic Pump</td>
                <td className="pr-4">
                  <a
                    href="https://amzn.to/3oTMwH7"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Amazon
                  </a>
                </td>
                <td className="pr-4">4</td>
              </tr>
              <tr>
                <td className="pr-4">Silicone Tubing (ID 3 mm x OD 5 mm)</td>
                <td className="pr-4">
                  <a
                    href="https://amzn.to/3oPKo3e"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Amazon
                  </a>
                </td>
                <td className="pr-4">1</td>
              </tr>
              <tr>
                <td className="pr-4">1/8 in. Hose Barb Union</td>
                <td className="pr-4">
                  <a
                    href="https://www.coleparmer.com/i/masterflex-fitting-hdpe-straight-hose-barb-union-1-8-id-10-pk/4061205"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Home Depot
                  </a>
                </td>
                <td className="pr-4">1 Pack</td>
              </tr>
              <tr>
                <td className="pr-4">
                  12-Volt 5-Amp DC Power Supply and Female Barrel Connector
                </td>
                <td className="pr-4">
                  <a
                    href="https://amzn.to/3fQIWJE"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Amazon
                  </a>
                </td>
                <td className="pr-4">1</td>
              </tr>
            </tbody>
          </table>
        </figure>
        <h2>Water Flow and Level Sensing</h2>
        <p>
          These materials enable the measuring of water conditions that allow
          for the system to be monitored for proper operation.
        </p>
        <figure className="mt-4">
          <table>
            <thead>
              <tr>
                <th className="text-left">
                  <strong>Description</strong>
                </th>
                <th className="text-left">Purchase</th>
                <th className="text-left">Quantity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="pr-4">Atlas Scientific Flow Meter</td>
                <td className="pr-4">
                  <a
                    href="https://atlas-scientific.com/probes/3-8-flow-meter/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Atlas Scientific
                  </a>
                </td>
                <td className="pr-4">1</td>
              </tr>
              <tr>
                <td className="pr-4">Atlas Scientific Flow Meter Totalizer</td>
                <td className="pr-4">
                  <a
                    href="https://amzn.to/3hSBpg3"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Amazon
                  </a>
                </td>
                <td className="pr-4">1</td>
              </tr>
              <tr>
                <td className="pr-4">Atlas Scientific EZO Carrier Board</td>
                <td className="pr-4">
                  <a
                    href="https://amzn.to/3fm9Z0o"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Amazon
                  </a>
                </td>
                <td className="pr-4">1</td>
              </tr>
              <tr>
                <td className="pr-4">
                  1/4 in. O.D. x 3/8 in. MIP NPTF Push-to-Connect Adapter
                  Fitting
                </td>
                <td className="pr-4">
                  <a
                    href="https://www.homedepot.com/p/John-Guest-1-4-in-O-D-x-3-8-in-MIP-NPTF-Polypropylene-Push-to-Connect-Adapter-Fitting-803359/300753485"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Home Depot
                  </a>
                </td>
                <td className="pr-4">2</td>
              </tr>
              <tr>
                <td className="pr-4">
                  3/8 in. FIP Brass Pipe Coupling Fitting
                </td>
                <td className="pr-4">
                  <a
                    href="https://www.homedepot.com/p/Everbilt-3-8-in-FIP-Lead-Free-Brass-Pipe-Coupling-Fitting-802109/300096245"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Home Depot
                  </a>
                </td>
                <td className="pr-4">2</td>
              </tr>
              <tr>
                <td className="pr-4">
                  Water Level Float Switch with Pipe Mount
                </td>
                <td className="pr-4">
                  <a
                    href="https://amzn.to/2QYmiXA"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Amazon
                  </a>
                  ,{" "}
                  <a
                    href="https://www.banggood.com/custlink/KD3ElBb0JS"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Bangood
                  </a>
                </td>
                <td className="pr-4">1</td>
              </tr>
              <tr>
                <td className="pr-4">Assorted Resistor Kit</td>
                <td className="pr-4">
                  <a
                    href="https://amzn.to/3oXnEOH"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Amazon
                  </a>
                  ,{" "}
                  <a
                    href="https://www.banggood.com/custlink/3GKRl0A6HW"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Bangood
                  </a>
                </td>
                <td className="pr-4">1</td>
              </tr>
            </tbody>
          </table>
        </figure>
        <h2>Air Condition Sensing</h2>
        <p>These materials enable various air conditions to be measured.</p>
        <figure className="mt-4">
          <table>
            <thead>
              <tr>
                <th className="text-left">Description</th>
                <th className="text-left">Purchase</th>
                <th className="text-left">Quantity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="pr-4">
                  HTU21DF Temperature/Humidity Sensor (or AM2315, SHT31, etc.
                  See{" "}
                  <a
                    href="https://github.com/kizniche/Mycodo/blob/master/mycodo-manual.rst#built-in-inputs"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Supported Sensors
                  </a>
                  )
                </td>
                <td className="pr-4">
                  <a
                    href="https://amzn.to/2QZQjGw"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Amazon
                  </a>
                  ,{" "}
                  <a
                    href="https://amzn.to/3wzxDfN"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Amazon
                  </a>
                  ,{" "}
                  <a
                    href="https://amzn.to/3yEF0V2"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Amazon
                  </a>
                  ,{" "}
                  <a
                    href="https://www.banggood.com/custlink/v33dl6A6HV"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Bangood
                  </a>
                </td>
                <td className="pr-4">1</td>
              </tr>
              <tr>
                <td className="pr-4">Dupont Crimping Tool and Connectors</td>
                <td className="pr-4">
                  <a
                    href="https://amzn.to/3fQKjrM"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Amazon
                  </a>
                  ,{" "}
                  <a
                    href="https://www.banggood.com/custlink/vDmhOes4cb"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Bangood
                  </a>
                  ,{" "}
                  <a
                    href="https://www.banggood.com/custlink/m3GYlgneCq"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Bangood
                  </a>
                </td>
                <td className="pr-4">1</td>
              </tr>
              <tr>
                <td className="pr-4">MH-Z19B CO2 Sensor</td>
                <td className="pr-4">
                  <a
                    href="https://amzn.to/3fmcJLe"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Amazon
                  </a>
                  ,{" "}
                  <a
                    rel="noreferrer noopener"
                    href="https://www.tindie.com/products/carboncycle/mh-z19b-co2-sensor-with-usb-interface/"
                    target="_blank"
                  >
                    Tindie
                  </a>
                  ,{" "}
                  <a
                    href="https://www.banggood.com/custlink/vG3dO4b63s"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Bangood
                  </a>
                </td>
                <td className="pr-4">1</td>
              </tr>
              <tr>
                <td className="pr-4">UART to USB Converter (USB Interface)</td>
                <td className="pr-4">
                  <a
                    href="https://amzn.to/3fo7Gdc"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Amazon
                  </a>
                </td>
                <td className="pr-4">1</td>
              </tr>
            </tbody>
          </table>
        </figure>
        <h2>Electrical Power Sensing</h2>
        <p>
          These materials enable the amount of power consumed by the system to
          be measured.
        </p>
        <figure className="mt-4">
          <table>
            <thead>
              <tr>
                <th className="text-left">Description</th>
                <th className="text-left">Purchase</th>
                <th className="text-left">Quantity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="pr-4">Analog-to-Digital Converter</td>
                <td className="pr-4">
                  <a
                    href="https://amzn.to/3bT9Csk"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Amazon
                  </a>
                  ,{" "}
                  <a
                    href="https://www.banggood.com/custlink/mvKYOeN4J1"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Bangood
                  </a>
                </td>
                <td className="pr-4">1</td>
              </tr>
              <tr>
                <td className="pr-4">
                  AC Current Sensor with Split Transformer or{" "}
                  <a
                    rel="noreferrer noopener"
                    href="https://www.galco.com/buy/Greystone-Energy-Systems/CS-650-R1"
                    target="_blank"
                  >
                    Greystone CS-650-R1 Solid Core Current Sensor
                  </a>{" "}
                  (only one, not both)
                </td>
                <td className="pr-4">
                  <a
                    href="https://amzn.to/3yGbSNm"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Amazon
                  </a>
                </td>
                <td className="pr-4">1</td>
              </tr>
              <tr>
                <td className="pr-4">Extension Cord (1 ft.)</td>
                <td className="pr-4">
                  <a
                    href="https://amzn.to/2RR5O3L"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Amazon
                  </a>
                </td>
                <td className="pr-4">1</td>
              </tr>
            </tbody>
          </table>
        </figure>
        <h2>3D Printed Parts</h2>
        <p>
          These are various 3D models of simple parts I created and printed with
          my 3D printer that helped with the build.
        </p>
        <figure className="mt-4">
          <table>
            <tbody>
              <tr>
                <td className="p-4 text-left">
                  Model 1:{" "}
                  <a
                    rel="noreferrer noopener"
                    href="https://www.thingiverse.com/thing:4216311"
                    target="_blank"
                  >
                    Sensor Probe Reservoir Lid
                  </a>
                </td>
              </tr>
              <tr>
                <td className="pr-4">
                  Model 2:{" "}
                  <a
                    rel="noreferrer noopener"
                    href="https://www.thingiverse.com/thing:4216335"
                    target="_blank"
                  >
                    Bottle Support Mount
                  </a>
                </td>
              </tr>
              <tr>
                <td className="pr-4">
                  3D Printer:{" "}
                  <a
                    href="https://amzn.to/3oT5rSl"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Creality Ender 5 Pro
                  </a>
                </td>
              </tr>
              <tr>
                <td className="pr-4">
                  3D Modeling Software:{" "}
                  <a
                    rel="noreferrer noopener"
                    aria-label="Fusion 360 (opens in a new tab)"
                    href="https://www.autodesk.com/campaigns/fusion-360-for-hobbyists"
                    target="_blank"
                  >
                    Autodesk Fusion 360
                  </a>
                </td>
              </tr>
              <tr>
                <td className="pr-4">
                  3D Slicing Software:{" "}
                  <a
                    rel="noreferrer noopener"
                    aria-label="Ultimaker Cura (opens in a new tab)"
                    href="https://ultimaker.com/software/ultimaker-cura"
                    target="_blank"
                  >
                    Ultimaker Cura
                  </a>
                </td>
              </tr>
              <tr>
                <td className="pr-4">
                  3D Printer Control Software:{" "}
                  <a
                    rel="noreferrer noopener"
                    aria-label="OctoPi (opens in a new tab)"
                    href="https://github.com/guysoft/OctoPi"
                    target="_blank"
                  >
                    OctoPi
                  </a>{" "}
                  (
                  <a
                    rel="noreferrer noopener"
                    aria-label="OctoPrint (opens in a new tab)"
                    href="https://octoprint.org"
                    target="_blank"
                  >
                    OctoPrint
                  </a>{" "}
                  for the Raspberry Pi)
                </td>
              </tr>
            </tbody>
          </table>
        </figure>
        <div className="h-16 block"></div>
      </main>
    </div>
  );
}
