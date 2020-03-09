$(document).ready(function() {
    $('#filterDate').datepicker({
    });

var jsonData = 

[
	{
		"dob": "02/11/2020",
		"Highlights": [
							"1858 First vision of the Virgin Mary to 14-year-old Bernadette of Lourdes, France",
							"1929 Vatican City (world's smallest country) made an enclave of Rome",
							"1975 Margaret Thatcher defeats Edward Heath for leadership of the British Conservative Party",
							"1990 Nelson Mandela released after 27 years imprisonment in South Africa",
							"2011 Egyptian Revolution culminates in the resignation of Hosni Mubarak and the transfer of power to the Supreme Military Council after 18 days of protests (Arab Spring)"
						],
		"Events": [
					"660 BC Traditional date for the foundation of Japan by Emperor Jimmu", "385 Siricius, bishop of Tarragona, elected as Bishop of Rome; first to style himself Pope", 
					"824 St Paschal I ends his reign as Pope", 
					"1543 Battle at Wayna Daga: Ethiopian and Portuguese troops beat Muslim army",
					"1659 The assault on Copenhagen by Swedish forces is beaten back with heavy losses",
					"1720 Sweden & Prussia sign peace (2nd Treaty of Stockholm)",
					"1766 Stamp Act declared unconstitutional in Virginia"
				],
		"Birthdays": [
						"1377 King Ladislas of Naples(d. 1414", 
						"1380 Poggio Bracciolini Italian humanist who rediscovered lost classical texts, born in Terranuova, Republic of Florence (d. 1459)",
						"1466 Elizabeth of York, Queen Consort of England and wife of King Henry VII, born in Westminster Palace, London (d. 1503",
						"1506 Juliana van Stolberg, engraver of Nassau",
						"1535 Gregory XIV, ['Niccolo Sfondrati], Roman Catholic pope (1590-91)",
						"1557 John Wtenbogaert, remonstrants theologist",
						"1568 Honore d'Urfe, French writer (d. 1625)",
						"1649 William Carstares, Scottish minister (d.1715)",
						"1657 Bernard Fontenelle, French scientist/writer (Plurality of Worlds)",
						"1755 Albert Christoph Dies, composer",
						"1764 Marie-Joseph de Chénier, French poet (Caïus Gracchus), born in Constantinople, Ottoman Empire (d. 1811)",
						"1774 Hans Järta, Swedish political activist (d. 1847)",
						"1776 Ioannis Kapodistrias, Greek diplomat of the Russian Empire and first head of state of independent Greece (d. 1831)",
						"1783 Jarena Lee, African American travelling minister",
						"1790 Ignaz Assmayer, composer",
						"1799 Basil Moreau, French Founder priest (d. 1873)"
				],
		"Deaths": [
					"641 Heraclius, emperor of Byzantium (610-641), dies at about 65",
					"731 Gregory II, Greek-Syrian Pope, dies",
					"821 Benedict of Aniane, saint, dies",
					"824 Paschal I, Italian Pope (817-24), dies",
					"867 Theodora, the Saint, beauty queen/empress of Byzantine, dies",
					"1141 Hugo of St-Victor, philosopher/theologist/mystic, dies",
					"1160 Minamoto no Yoshitomo, Japanese general (b. 1123)",
					"1503 Elizabeth of York, Queen Consort of England and wife of King Henry VII, dies on 38th birthday",
					"1511 Henry, Duke of Cornwall, son of Henry VIII and Catherine of Aragon, dies at 7 weeks",
					"1543 Ahmed Gran, sultan of Adal, dies in battle at Wayna Daga",
					"1622 Alfonso Fontanelli, composer, dies at 64",
					"1626 Pietro Cataldi, Italian mathematician, dies at 77"
				],
		"Weddings": [
						"1638 Dutch countess Louise of Solms marries earl John of Brederode",
						"1810 French leader Napoleon I marries 2nd wife Marie-Louise of Austria",
						"1902 US military leader George Marshall (22) weds Elizabeth Carter Coles in San Antonio, Texas",
						"1905 Novelist Thomas Mann (29) weds Katia Pringsheim (21) in Munich, Germany",
						"1965 Beatle Ringo Starr marries Maureen Cox",
						"1972 Playwright Tom Stoppard (34) weds doctor and author Miriam Moore-Robinson (34)",
						"1989 MLB pitcher Dave Righetti (30) weds Kandice Owen",
						"1995 Tennis star Yannick Noah (34) weds Victoria's Secret model Heather Stewart-Whyte (25) in France",
						"2006 Mexican telenovela actor Guillermo Capetillo (47) weds model Tania Amezcua in Mixcoac, Mexico",
						"2017 Actor Bug Hall (32) weds Jill Marie DeGroff in Encino, California"
					],
		"Sports": [
					"1876 AI Spalding opens his sporting good shop",
					"1878 Frederick Thayer patents catcher's mask (pat # 200,358)",
					"1899 1st 2-man team 6-day bicycle race in US begins, Madison Square Garden, NYC",
					"1908 NY to Paris auto race (via Alaska & Siberia) begins in NYC George Schuster wins after 88 days behind the wheel",
					"1909 American James Clark runs world record marathon (2:46:52.6) in NYC",
					"1926 Barendrecht soccer team forms",
					"1932 Sonja Henie of Norway wins her 2nd of 3 consecutive Olympic gold medals in women’s figure skating at the Lake Placid Winter Games; beats Austria’s Fritzi Burger into 2nd place for 2nd straight Games",
					"1932 World champion French husband and wife team Pierrre and Andrée Brunet win their 2nd consecutive Olympic pairs figure skating gold medal at the Lake Placid Games",
					"1932 Karl Schäfer of Austria wins the first of 2 consecutive men’s figure skating Olympic gold medals at the Lake Placid Winter Games in the United States",
					"1937 Cleveland (now Los Angeles) Rams granted an NFL franchise"
				]
	},

	{
		"dob": "02/12/2020",
		"Highlights": [
						"1876 Al Spalding opens his sporting good shop",
						"1878 Frederick Thayer patents catcher's mask (pat # 200,358)",
						"1899 1st 2-man team 6-day bicycle race in US begins, Madison Square Garden, NYC",
						"1908 NY to Paris auto race (via Alaska & Siberia) begins in NYC George Schuster wins after 88 days behind the wheel",
						"1909 American James Clark runs world record marathon (2:46:52.6) in NYC",
						"1926 Barendrecht soccer team forms",
						"1932 Sonja Henie of Norway wins her 2nd of 3 consecutive Olympic gold medals in women’s figure skating at the Lake Placid Winter Games; beats Austria’s Fritzi Burger into 2nd place for 2nd straight Games",
						"1932 World champion French husband and wife team Pierrre and Andrée Brunet win their 2nd consecutive Olympic pairs figure skating gold medal at the Lake Placid Games",
						"1932 Karl Schäfer of Austria wins the first of 2 consecutive men’s figure skating Olympic gold medals at the Lake Placid Winter Games in the United States",
						"1937 Cleveland (now Los Angeles) Rams granted an NFL franchise"
					],
		"Events": [
					"1700 The Great Northern War begins in Northern Europe between Denmark–Norway, Saxony and Russia and the Swedish Empire.",
					"1912 The last Qing Emperor of China, Puyi abdicates after losing the support of the Chinese people and thus the mandate of heaven",
					"1947 French fashion designer Christian Dior presents his first influential collection, named the 'New Look' ",
					"1999 US President Bill Clinton acquitted by the Senate in his impeachment trial",
					"2001 NEAR Shoemaker spacecraft touchdown in the 'saddle' region of 433 Eros becoming the first spacecraft to land on an asteroid.",
					"2013 North Korea allegedly conducts its third nuclear test, saying it was a nuclear device that could be weaponized"
				],
		"Birthdays": [
						"1074 Conrad, King of Germany and Italy (d. 1101)",
						"1211 Henry VII, Roman catholic German king (1220-35)",
						"1218 Kujo Yoritsune, Japanese shogun (d. 1256)",
						"1438 Adolf van Egmond, duke of Gelre/earl of Zutphen",
						"1474 Lorenzo Campeggi(o), archbishop of Bologna/diplomat",
						"1567 Thomas Campion, England, composer/poet/physician",
						"1584 Casparus Barleaus, Flemish theologist/poet (Muiderkring)",
						"1585 Caspar Bartholin the Elder, Danish physician, theologian, writer on anatomy, born in Malmö, Denmark (modern Sweden) (d. 1629)",
						"1606 John Winthrop, the Younger, Governor of Connecticut (d. 1676)",
						"1636 Herman Witsius, [Wits], Dutch reformed theologist",
						"1637 Jan Swammerdam, Amsterdam, Dutch anatomist/entomologist (Bible of Nature)"
					],
		"Deaths": [
					"1128 Toghtekin, slave/atabek of Damascus, dies",
					"1242 Hendrik VII, Roman Catholics German king (1220-35), commits suicide",
					"1538 Albrecht Altdorfer, German painter, dies at about 57",
					"1554 Jane Grey, Queen of England for 9 days, beheaded for treason at 16",
					"1554 Lord Guildford Dudley, Jane Grey's husband, beheaded at about 19 for treason",
					"1571 Nicholas Throckmorton, English diplomat and politician (b. 1515)",
					"1590 Francois Hotman/Hotomanus, French lawyer and diplomat (Anti-Tribonien), dies at 65",
					"1595 Archduke Ernest of Austria, Governor of the Spanish Netherlands (b. 1553)",
					"1616 Johannes van den Driesche, Flemish Hebraist, dies at 65",
					"1624 George Heriot, Scottish goldsmith and philanthropist (b. 1563)",
					"1630 Fynes Moryson, English traveler and writer (b. 1566)",
					"1684 Pietro Andrea Ziani, composer, dies at 67",
					"1689 Marie Louise D'Orleans, Queen consort of Spain as the first wife of King Charles II of Spain, dies at 26",
					"1700 Aleksei Shein, Russian general and statesman (b. 1662)",
					"1712 Marie-Adélaïde of Savoy, mother of Louis XV of France, dies at 26",
					"1724 Elkanah Settle, English writer (b. 1648)",
					"1728 Agostino Steffani, Italian-German diplomat and composer, dies at 73",
					"1738 James Sherard, English amateur composer, dies at 71",
					"1762 Laurent Belissen, composer, dies at 68",
					"1763 Pierre de Marivaux, French writer (b. 1688)",
					"1771 Adolf Frederik, King of Sweden (1751-70), dies at 60",
					"1787 Ruggiero Boscovich, Italian physicist/astronomer/philosopher, dies at 75"
				],
		"Weddings": [
					"1736 Maria Theresa Habsburg marries French Stefanus (emperor Francois I)"
				],
		"Sports": [
					"1876 Al Spalding opens his sporting good shop",
					"1878 Frederick Thayer patents catcher's mask (pat # 200,358)",
					"1899 1st 2-man team 6-day bicycle race in US begins, Madison Square Garden, NYC",
					"1908 NY to Paris auto race (via Alaska & Siberia) begins in NYC George Schuster wins after 88 days behind the wheel",
					"1909 American James Clark runs world record marathon (2:46:52.6) in NYC",
					"1926 Barendrecht soccer team forms",
					"1932 Sonja Henie of Norway wins her 2nd of 3 consecutive Olympic gold medals in women’s figure skating at the Lake Placid Winter Games; beats Austria’s Fritzi Burger into 2nd place for 2nd straight Games",
					"1932 World champion French husband and wife team Pierrre and Andrée Brunet win their 2nd consecutive Olympic pairs figure skating gold medal at the Lake Placid Games",
					"1932 Karl Schäfer of Austria wins the first of 2 consecutive men’s figure skating Olympic gold medals at the Lake Placid Winter Games in the United States",
					"1937 Cleveland (now Los Angeles) Rams granted an NFL franchise"
				],
	},

	{
		"dob": "02/13/2020",
		"Highlights": [
						"1258 Baghdad, then a city of 1 million, falls to the Mongols as the abbasid Caliphate is destroyed, tens of thousands slaughtered, ending the Islamic Golden Age",
						"1601 1st British East India Company voyage departs from London, lead by John Lancaster",
						"1689 British Parliament adopts the Bill of Rights which establishes the rights of parliament and places limits on the crown",
						"1942 Hitler's Operation Sealion, the invasion of England, is cancelled",
						"1945 Allied planes begin bombing Dresden, Germany; a firestorm results and over 22,000 die",
						"1945 USSR captures Budapest, after a 49-day battle with Nazi Germany in which 159,000 die"
					],
		"Events": [
					"1130 Gregorio de' Papareschi elected as Pope Innocent II",
					"1349 Jews are expelled from Burgdorf, Switzerland",
					"1502 Nicolás de Ovando y Cáceres, new Governor of the Indies sets sail for the Indies with fleet of 30 ships, largest-ever fleet to the New World",
					"1503 Disfida di Barletta - Famous challenge between 13 Italian and 13 French knights near Barletta, Southern Italy",
					"1510 Charles of Gelre conquers Oldenzaal",
					"1545 Willem of Nassau becomes Prince of Orange",
					"1575 Henry III of France is crowned at Rheims",
					"1601 1st British East India Company voyage departs from London, lead by John Lancaster"
				],
		"Birthdays": [
						"711 BC Emperor Jimmu Tennō, According to legend the 1st Emperor of Japan (660 BC - 585 BC) and founder of the imperial dynasty, (d. 585 BC)",
						"1440 Hartmann Schedel, German physician, humanist and historian, born in Nuremberg, Germany (d. 1514)",
						"1457 Mary of Burgundy, daughter of Charles the Bold and wife of Maximilian I, Holy Roman Emperor, born in Brussels, Burgundian Netherlands (d. 1482)",
						"1480 Girolamo Aleandro, Italian Catholic cardinal, Treviso, Venice, Italy (d. 1542)",
						"1599 Alexander VII [Fabio Chigi], Italian Pope (1655-67), born in Siena, Florence, Italy (d. 1667)",
						"1610 Jean de la Badie, French theologian, founder of Labadists, born in Bourg, Bordeaux, France (d. 1674)",
						"1622 Adam Pijnacker, Dutch landscape painter and etcher, baptized",
						"1658 Jan B. Wellekens, Dutch poet and painter",
						"1660 Johann Sigismund Kusser, composer",
						"1672 Étienne François Geoffroy, French physician and chemist (1718 affinity table), born in Paris (d. 1731)",
						"1682 Giovanni Battista Piazzetta, Italian Rococo painter of religious subjects and genre scenes (Fortune Teller), born in Venice (d. 1754)",
						"1713 Domingo Miguel Bernaube Terradellas, Spanish composer, born in Barcelona (d. 1751)",
						"1721 John Reid [Robertson], British Army General and composer (d. 1807)",
						"1728 John Hunter, Scottish surgeon and founder of pathological anatomy in England, born in Long Calderwood, Scotland (d. 1793)"
					],
		"Deaths": [
					"1130 Honorius II, [Lamberto], Pope (1124-30), dies",
					"1141 Béla II of Hungary (b. 1110)",
					"1199 Stefanus Nemanja (Symeon), monk, dies",
					"1219 Minamoto no Sanetomo, Japanese 3rd shōgun of the Kamakura shogunate",
					"1237 Jordanus of Saxon, 2nd general of Dominicans, drowns",
					"1315 Jean I of Chalon-Arlay, mayor of Neuchôtel, dies",
					"1332 Andronicus II Paleologus, Byzantine emperor (1282-1328)/monk, dies",
					"1539 Isabella d'Este, Marquise of Mantua (b. 1474)",
					"1542 Catherine Howard, Queen of England (1540-42), 5th wife of Henry VIII, beheaded at 18 or 19 for adultery",
					"1542 Jane Boleyn, Viscountess Rochford, sister-in-law of King Henry VIII of England, beheaded in the Tower of London at 36 or 37",
					"1585 Alfonso Salmeron, Spanish Jesuit biblical scholar, dies at 69",
					"1592 Jacopo Bassano, Italian painter",
					"1600 Gian Paolo Lomazzo, Italian painter and poet (Trattato), dies at 61",
					"1602 Alexander Nowell, English churchman, dean of St Paul's, dies",
					"1608 Konstanty Wasyl Ostrogski, Lithuanian prince (b. 1526)",
					"1608 Elizabeth Talbot, Countess of Shrewsbury and builder of country houses, dies at 89",
					"1624 Stephen Gosson, English satirist (b. 1554)",
					"1629 Girolamo Giacobbi, composer, dies at 61",
					"1635 Georg R Weckerlin, German poet, dies at 50",
					"1660 Charles X Gustav, King of Sweden (1654-60), dies at 37",
					"1662 Elisabeth Stuart, of James I of Scotland and England, dies at 65",
					"1693 Johann Kaspar von Kerll, German composer, dies at 65",
					"1724 Francisco Jose Coutinho, composer, dies at 43",
					"1727 William Wotton, English theologian and scholar, dies at 58"
				],
		"Weddings": [
						"1575 Henry III of France marries Louise de Lorraine-Vaudémont.",
						"1940 Actress Lana Turner (19) marries bandleader Artie Shaw (29)",
						"1983 Jerry Lewis marries 2nd wife dancer SanDee Pitnick",
				],
		"Sports": [
						"1912 England cricket team regains the Ashes",
						"1920 National Negro Baseball League organizes",
						"1923 1st Black pro Basketball team, 'Renaissance', organizes",
						"1928 Clas Thunberg of Finland wins his 3rd Olympic gold medal when he dead-heats with Norway’s Bernt Evensen in the 500m speed skating at the St. Moritz Winter Games",
						"1928 Legendary Norwegian speed skater Ivar Ballangrud wins the first of 2 straight 5,000m Olympic gold medals when he beats Julius Skutnabb of Finland by 9 seconds in St. Moritz",
						"1932 Australian Championships Women's Tennis: Coral McInnes Buttsworth retains title; beats Kathrine Le Mesurier 9-7, 6-4",
						"1932 Australian Championships Men's Tennis: Jack Crawford retains title and repeats previous year's win over Harry Hopman 4-6, 6-3, 3-6, 6-3, 6-1",
						"1932 A 2-2 final round tie with the US is good enough for Canada to clinch its 4th consecutive Olympic ice hockey gold medal at Lake Placid; Canadian center Walter Monson is tournament top scorer with 11 points",
						"1932 Finland goes 1-2 in the 50k cross country event at the Lake Placid Winter Olympics; Veli Saarinen wins gold ahead of team mate Väinö Liikkanen"
					],
		},

		{
			"dob": "02/14/2020",
			"Highlights": [
								"1014 Pope Benedict VIII crowns Henry II Holy Roman Emperor",
								"1076 Pope Gregory VII excommunications Holy Roman Emperor Henry IV",
								"1797 The Battle of Cape St Vincent: British fleet under Admiral Sir John Jervis defeats larger Spanish fleet under Admiral Don José de Córdoba y Ramos near Cape St. Vincent, Portugal. Captain Horatio Nelson distinguishes himself.",
								"1876 Alexander G. Bell & Elisha Gray apply separately for telephone patents Supreme Court eventually rules Bell rightful inventor",
								"1929 St Valentine's Day Massacre in Chicago, 7 gangsters killed, allegedly on Al Capone's orders",
								"1971 Richard Nixon installs secret taping system in the White House"
							],
			"Events": [
							"842 Charles II & Louis the German sign treaty",
							"1014 Pope Benedict VIII crowns Henry II Holy Roman Emperor",
							"1130 Jewish Cardinal Pietro Pierleone elected as anti-pope Anacletus II",
							"1556 English Archbishop Thomas Cranmer declared a heretic",
							"1630 Dutch fleet of 69 ships reaches Pernambuco, Brazil",
							"1670 Roman Catholic Emperor Leopold I chases Jews out of Vienna",
							"1689 English parliament places Mary Stuart and Prince William III on the throne",
							"1766 Dutch governor Falck and King Keerthisiri Rajasinghe of Kandy sign Treaty of Batticaloa",
							"1778 'Stars & Stripes' arrives in foreign port for 1st time (France)",
							"1794 1st US textile machinery patent granted, to James Davenport, Philadelphia",
							"1803 Apple parer patented by Moses Coats, Downington, Pennsylvania"
					],
			"Birthdays": [
								"1452 Pandolfo Petrucci, Italian ruler of the Republic of Siena (1500-12) during the Renaissance. born in Siena, Italy (d. 1512)",
								"1462 Edzard I Cirksena, the Great, earl of East-Friesia (1494-1528)",
								"1468 Johann Werner, German mathematician, born in Nuremberg, Germany (d. 1522)",
								"1513 Domenico Maria Ferrabosco, Italian composer and singer of the Renaissance, born in Bologna (d. 1574)",
								"1515 Frederick III, the Pious, Elector Palatine of the Rhine , born in Simmern, Germany (d. 1576)",
								"1533 Christianus Adrichomius, Dutch Catholic priest and writer (Vita Jesu Christi), born in Delft, Netherlands (d. 1585)",
								"1546 Johann Pistorius, German theologist and historian, born in Nidda, Germany (d. 1608)",
								"1572 Hans Christoph Haiden, German composer, organist and poet",
								"1602 Pier Francesco Cavalli, Italian opera composer, born in Crema, Lombardy, Italy (d. 1676)",
								"1621 Sybilla Schwarz, German baroque poet, born in Greifswald, Germany (d. 1638)",
								"1670 Georg Gabriel Schutz, German composer, born in Nuremberg, Germany (d. 1716)",
								"1679 Georg Friedrich Kauffmann, German composer, born in Ostramondra, Thuringia, Germany (d. 1735)",
								"1680 John Sidney, 6th Earl of Leicester, English privy councillor, born in Penshurst Place, Kent (d. 1737)",
								"1692 Pierre-Claude Nivelle de La Chaussée, French writer (L’École des Mères), born in Paris (d. 1754)"
					],
			"Weddings": [
								"1613 King James I's daughter Elizabeth marries Frederik",
								"1952 Comedian Joey Adams marries gossip columnist Cindy Heller",
								"1988 General hospital TV star Jackie Zeman marries Glenn Gorden",
								"1994 Grateful Dead's Jerry Garcia (51) weds Deborah Koons (40) in Tiburon, California",
								"2007 Former Felicity actress Keri Russell (30) weds longtime boyfriend Shane Deary (30) in NYC, New York",
								"2007 Former Atomic Kitten member Kerry Katona (26) weds Mark Croft in Gretna Green",
								"2008 Oasis singer Liam Gallagher (35) weds All Saints singer Nicole Appleton (33) at Westminster Register Office in London",
								"2009 Victoria's Secret Angel model Adriana Lima (31) weds NBA player Marko Jaric (33) in Jackson Hole, Wyoming",
								"2013 Wedding planner to the stars Preston Bailey (63) weds Theo Bleckmann (47) at Empire State Building"
						],
			"Sports": [
								"1887 Cubs sell Mike King Kelly to Boston for record $10,000",
								"1890 1st NSW v South Australia 1st-class cricket game",
								"1896 Stanley Cup, Victoria Skating Rink, Montreal, Quebec: Winnipeg Victorias beat Montreal Victorias, 2-0",
								"1928 Clas Thunberg of Finland wins his 2nd gold medal of the Games and 4th career title when he takes out the 1,500m speed skating at the St. Moritz Winter Olympics",
								"1928 Per-Erik Hedlund leads a Swedish sweep of the medals in the 50k cross-country at the St. Moritz Winter Olympics; Gustaf Jonsson & Volgar Andersson take the minor medals",
								"1934 NHL Ace Bailey Benefit Game: Toronto beats All-Stars 7-3 in Toronto",
								"1936 Karl Schäfer of Austria wins his 2nd consecutive men’s figure skating Olympic gold medal at the Garmisch-Partenkirchen Winter Games in Germany",
								"1944 Carl Wick publishes 'Salmon Trolling for Commercial & Sport Fishing'",
								"1950 Moroney scores cricket twin centuries for Australia at Johannesburg"
						],
				"Deaths": [
								"1929 Tom Burke, American runner (b. 1875)",
								"1948 Mordecai Brown, American baseball player (b. 1876)",
								"1952 Maurice De Waele, Belgian cyclist (b. 1896)",
								"1974 C S Dempster, cricketer (10 Tests for NZ, 723 runs), dies",
								"1978 Paul Governali, American professional football player (b. 1921)",
								"1983 Lina Radke, German 800m runner (Olympic gold 1928), dies at 79",
								"1990 Graeme Hole, cricketer (18 Tests for Australia, 789 runs), dies",
								"1992 Roepie Kruize, hockey player (Olympic bronze 1948/silver-52), dies at 67",
								"1996 Bob Paisley, football manager, dies at 77",
								"2002 Nándor Hidegkuti, Hungarian footballer (b. 1922)",
								"2003 Johnny Longden, Canadian Racing Hall of Fame jockey/trainer (1943 Triple Crown on Count Fleet), dies of a stroke at 96",
								"2004 Marco Pantani, Italian cyclist (Tour de France 1998), dies of acute cocaine poisoning at 34",
								"2005 Najai Turpin, American boxer",
								"2010 Dick Francis, British jockey and detective writer (Whip Hand, High Stakes), dies at 89"
							],
		},

		{
			"dob": "02/15/2020",
			"Highlights": [
								"399 BC Philosopher Socrates is sentenced to death by the city of Athens for corrupting the minds of the youth of the city and for impiety",
								"590 Khosrau II, the last great Sasanian king is crowned King of Persia",
								"1763 Austria, Prussia & Saxony sign the Treaty of Hubertusburg, marking the end of the French and Indian War and of the Seven Years War",
								"1986 Ferdinand Marcos wins rigged presidential election in the Philippines",
								"2001 First draft of the complete human genome is published in the journal 'Nature'",
								"2003 An estimated 6-11 million people around the world take to the streets to protest against war with Iraq"
						],
			"Events": [
							"399 BC Philosopher Socrates is sentenced to death by the city of Athens for corrupting the minds of the youth of the city and for impiety",
							"590 Khosrau II, the last great Sasanian king is crowned King of Persia",
							"732 Zen teacher Ho-tse Shen-hui disputes founder of Northern Ch'an line",
							"1145 Bernardo elected Pope Eugene III",
							"1313 Peace of Angleur, Liège signed",
							"1386 Duke Philip the Stout forms Council of Flanders",
							"1539 Emperor Charles receives Cardinal Pole in Toledo",
							"1552 Dutch coast hit by heavy storm",
							"1563 Russian troops occupy Polotsk Lithuania",
							"1637 Ferdinand III succeeds Ferdinand II as Holy Roman Emperor",
							"1686 Jean Baptiste Lully's opera 'Armide' premieres in Paris",
							"1745 Colley Cibbers 'Papal Tyranny' premieres in London",
							"1775 Angelo Braschi chosen as Pope Pius VI",
							"1799 1st US printed ballots authorized, Pennsylvania",
							"1804 New Jersey becomes last northern state to abolish slavery",
							"1805 Harmony Society is officially formed."
						],
			"Birthdays": [
								"1368 Sigismund, Holy Roman emperor (1410-37), born in Nuremberg, Kingdom of Germany (d. 1437)",
								"1458 Ivan the Young, Ruler of Tver (d. 1490)",
								"1471 Piero di Lorenzo de' Medici, ruler of Florence (d. 1503)",
								"1497 Philipp Melanchthon, German Protestant",
								"1519 Pedro Menéndez de Avilés, Spanish admiral and explorer who founded St. Augustine, Florida, born in Avilés, Spain (d. 1574)",
								"1524 Charles de Guise, archbishop/cardinal of Reims",
								"1557 Alfonso Fontanelli, Italian composer (Ferrara school), born in Reggio nell'Emilia (d. 1622)",
								"1571 Michael Praetorius, Kreuzberg Germany, composer (Syntagma music)",
								"1620 Francois Charpentier, French scholar and archaeologist, born in Paris, France (d. 1702)",
								"1650 Anne Jules duke de Noailles, marshal of France (hugenot)",
								"1660 Frans Anneessens, Belgian merchant/dean of artisans",
								"1666 Antonio M Valsalva, Italian anatomist (eardrums, glottis)",
								"1705 Charles-André Van Loo, French Rococo painter, born in Nice, France (d. 1765)",
								"1707 Claude Prosper, novelist, born in Paris, France",
								"1710 Louis XV 'Louis the Beloved', King of France (1715-74), born in the Palace of Versailles, France (d. 1774)",
								"1800 Frederik W Conrad, Dutch hydraulic engineer/railway pioneer",
								"1803 John Augustus Sutter, Swiss/US colonist (New Helvetia Ca, Sutter Mill)",
								"1807 Ignacy Feliks Dobrzynski, Polish composer, born in Romanów, Russian Empire (d. 1867)"
						],
			"Weddings": [
							"1867 Russian novelist Fyodor Dostoyevsky (45) weds Anna Snitkina at Trinity Cathedral in Saint Petersburg, Russia",
							"1919 Author Maurice Maeterlinck (56) weds actress Renée Dahon (27) in Nice, France",
							"1943 Model Bettie Page (19) weds high school sweetheart Billy Neal in Gallatin, Tennessee",
							"1958 Los Angeles Dodgers broadcaster Vin Scully (30) weds model Joan (not the actress) Crawford in California",
							"1991 Baseball superstar George Brett (37) weds Leslie Davenport in Manhattan Beach, California",
							"1996 Chinese actress Gong Li (30) weds Singapore-born businessman Ooi Hoe Seong (46) at Singapore's Registry of Marriages"
						],
			"Sports": [
							"1905 1st race meet at Oaklawn Park (Hot Springs, Ark)",
							"1916 NY Yankees buy Frank 'Home Run'Baker from the Athletics for $37,500",
							"921 Arthur Mailey completes 9-121 v England, Australian Test Cricket rec",
							"930 Weona beats Toluca in Illinois Basketball Tournament in 10 overtimes",
							"931 Spring training site of NY Yankees in St Petersburg is renamed Miller Huggins Field in honor of the team's late manager",
							"932 III Winter Olympic Games close at Lake Placid, New York",
							"932 Australia beat South Africa in cricket by an innings in 5 hrs 53 min playing time"
						],
			"Deaths": [
							"1043 Gisela of Swabia, Holy Roman Empire Empress as wife of Holy Roman Emperor Conrad II, dies at 52",
							"1145 Lucius II, [Gherardo Caccianemici], Italian Pope (1144-45), dies",
							"1152 Konrad III, Roman-German King (1138-1152), dies at about 58",
							"1503 Henry Deane, Archbishop of Canterbury (1501-03), dies",
							"1568 Hendrik van Brederode, Dutch noble (Compromise of Nobles), dies at 36",
							"1580 Cunerus Petri, Dutch theologist/bishop of Leeuwarden, dies",
							"1597 Pieter J Kies, Dutch mayor of Haarlem (1572-73), dies at about 66",
							"1600 Jose the Acosta, Spanish missionary (Peru), dies at 59(?)",
							"1621 Michael Praetorius, German composer (In Dulce Jubilo), dies at 50",
							"1634 Wilhelm Fabry, German surgeon (Father of German surgery), dies at 73",
							"1701 Adam Drese, German composer, dies at 80",
							"1713 Anthony Ashley Cooper, 3rd Earl of Shaftesbury, writer, dies",
							"1738 Matthias Braun, Czech sculptor (b. 1684)",
							"1744 František Václav Míča, Czech conductor and composer, dies at 49",
							"1759 Alexander von Papenhoven, Flemish religious sculptor, dies at 89",
							"1761 Carlo Cecere, Italian composer, dies at 54",
							"1775 Peter Dens, Flemish Catholic theologian, dies at 84",
							"1778 Johann Gottlieb Gorner, German composer, dies at 80",
							"1781 Gotthold Ephraim Lessing, Saxon playwright/critic, dies at 52",
							"1818 Charles XIII, King of Sweden (1809-18)/Norway (1814-18), dies at 69",
							"1844 Henry Addington, 1st Viscount Sidmouth, British Prime Minister (Tory: 1801-04), dies at 86",
							"1928 H. H. Asquith, British Prime Minister (Liberal: 1908-16), dies at 75",
							"1965 Nat King Cole, American singer (Unforgettable, Mona Lisa), dies of cancer at 49",
							"2002 Kevin Smith, New Zealand actor (Ares-Hercules), dies at 38 after falling from a prop tower"
						],
		},

		{
			"dob": "02/16/2020",
			"Highlights": [
								"1659 1st known cheque (£400) (on display at Westminster Abbey)",
								"1840 American Charles Wilkes discovers Shackleton Ice Shelf, Antarctica",
								"1923 Howard Carter opens the inner burial chamber of the Pharaoh Tutankhamun's tomb and finds the sarcophagus",
								"1959 Fidel Castro becomes the 16th Prime Minister of Cuba after overthrowing Fulgencio Batista",
								"2005 The Kyoto Protocol comes into force following its ratification by Russia."
							],

			"Events": [
							"374 9th recorded perihelion passage of Halley's Comet",
							"600 Pope Gregory the Great decrees saying 'God bless You' is the correct response to a sneeze",
							"1249 Andrew of Longjumeau is dispatched by Louis IX of France as his ambassador to meet with the Khan of the Mongols",
							"1486 Maximilian I is elected King of the Romans at Frankfurt",
							"1512 Battle at Valeggio: French troops beat Venetianen",
							"1559 Pope Paul IV calls for deposition of sovereigns supporting heresy",
							"1659 1st known cheque (£400) (on display at Westminster Abbey)",
							"1666 Netherlands & Brandenburg sign treaty",
							"1677 Earl of Shaftesbury arrested and confined in the Tower of London",
							"1741 Benjamin Franklin's General Magazine begins publishing",
							"1742 Spencer Compton becomes Prime Minister of Great Britain (First Lord of the Treasury)",
							"1840 American Charles Wilkes discovers Shackleton Ice Shelf, Antarctica",
							"1854 Franz Liszt's symphony 'Orpheus' premieres",
							"1927 Noël Coward's 'Marquise' premieres in London",
							"1943 British premier Winston Churchill contracts pneumonia"
						],

			"Birthdays": [
								"1921 Vera-Ellen [Westmeier Rohe], American actress and dancer (Big Leaguer, On the Town), born in Norwood, Ohio (d. 1981)",
								"1936 Carl Icahn, American businessman (Icahn Enterprises), born in NYC, New York",
								"1942 Kim Jong-il, Supreme Leader of North Korea (1994-2011), born in Vyatskoye, Soviet Union [disputed birth place and birth date, 1941] (d. 2011)",
								"1959 John McEnroe, American tennis player (US Open 1979-81, 84 / Wimbledon 1981, 83, 84), born in Wiesbaden, Germany",
								"1965 Dave Lombardo, Cuban drummer (Slayer)",
								"1965 Adama Barrow, Gambian politician, President of Gambia (2017-), born in Mankamang Kunda, Gambia",
								"1967 Robert Massey, NFL cornerback (Arizona Cardinals, Detroit Lions)",
								"1967 John Valentin, infielder (Boston Red Sox), born in Mineola, New York",
								"1967 Keith Gretzky, former hockey player; brother of Wayne Gretzky",
								"1968 Cecil Gray, NFL tackle (Arizona Cardinals), born in Harlem, New York",
								"1968 Erik Regtop, Dutch soccer player (SC Heerenveen), born in Schoonebeek, Netherlands",
								"1968 Warren Ellis, British comic book writer (Red), born in Essex, England"
							],

			"Weddings": [
							"1655 Dutch Grand Pensionary advisor Johan de Witt marries Wendela Bicker",
							"1734 Jurist William Allen (29) weds Margaret Hamilton",
							"1784 American Revolutionary War patriot Ethan Allen (46) weds second wife Frances Montresor Brush Buchanan",
							"1867 Prime Minister of Canada John A. Macdonald (52) weds Agnes Bernard (30) at St George's Church in Hanover Square, London",
							"1948 Baseball player and manager Leo Durocher (41) weds actress Laraine Day (27) in Santa Monica, California",
							"1955 Playwright Brendan Behan (32) weds Beatrice Salkeld at Donnybrook Church in Dublin, Ireland",
							"1967 Hairdresser and businessman Vidal Sassoon (39) weds actress Beverly Adams (21)",
							"1969 Country singer Tammy Wynette (26) weds musician George Jones (37)",
							"1974 MLB player Mike Schmidt (24) weds Donna Wightman",
							"2011 Indian tennis ace Mahesh Bhupati (36) weds Bollywood actress and former Miss Universe (2000) Lara Dutta (32) at Bandra, Mumbai",
							"2013 'Devious Maids' actress Dania Ramirez (33) weds director Bev Land on the beach in Punta Cana, Dominican Republic" 
						],
									
			"Sports": [
							"1936 IV Winter Olympic Games close in Garmisch-Partenkirchen, Germany",
							"1950 Writers fail to elect anyone to Baseball's Hall of Fame",
							"1952 Ian Craig makes NSW cricket debut aged 16 years 249 days (NSW record)",
							"1953 Ted Williams safely crash-lands his damaged Panther jet, later awarded the Air medal",
							"1963 North Carolina forward Billy Cunningham grabs a record 27 rebounds in a game vs Clemson",
							"1970 Joe Frazier TKOs Jimmy Ellis in 5 for heavyweight boxing title",
							"1972 Test Cricket debut of Lawrence Rowe WI v NZ Kingston, 214 & 100",
							"1975 Washington Capitals 1st NHL shutout, beating KC Scouts 3-0",
							"1984 Bill Johnson becomes 1st American to win Olympic downhill skiing gold",
							"1984 NJ Devils 1st OT goal, Jan Ludvig beats Hartford Whalers 6-5",
							"1989 Dodgers pitcher Orel Hershiser signs $7.9M-3 year contract",
							"1989 Red Sox pitcher Roger Clemens signs $7.5M-3 year contract",
							"1992 LA Lakers retire Magic Johnson's #32 uniform",
							"1993 Sandra Völker swims world record 50m backstroke (28.33 sec)",
							"2013 Lionel Messi scores his 14th consecutive goal in La Liga and his 300th goal in 365 appearances for Barcelona"						
					],


			"Deaths": [
							"1990 Keith Haring, American graffiti artist (brilliant baby), dies of AIDS at 31",
							"1991 Enrique B Varela, commandant Nicaragua contra's, dies",
							"2013 Tony Sheridan, English singer-songwriter and guitarist who collaborated with The Beatles, dies at 72",
							"2014 Michael Shea, American sci-fi author (World Fantasy Award: Nifft the Lean, Growlimb), dies at 67",
							"2015 Robert Wade-Gery, British diplomat (High Commissioner to India 1982–87), dies at 85",
							"2015 Lesley Gore, American singer (It's My Party, You Don't Own Me), dies of lung cancer at 68",
							"2016 Boutros Boutros-Ghali, Egyptian politician and 6th Secretary-General of the United Nations (1992- 96), dies at 93",
							"2017 Dick Bruna, Dutch illustrator (Miffy books), dies at 89",
							"2018 Hubert Doggart, English cricketer (2 Tests for England 1950), dies at 92",
							"2019 Don Bragg, American pole vaulter (Olympic gold 1960), dies of results of stroke at 83",
							"2019 Ken Nordine, American voice-over and recording artist (World Jazz), dies at 98",
							"2019 Theodore Isaac Rubin, American psychiatrist and author credited with popularising psychotherapy, dies at 95"
					],
		},

		{
			"dob": "02/17/2020",
			"Highlights": [
								"1568 Holy Roman Emperor Maximilian II agrees to pay tribute to the Ottoman Empire for peace",
								"1865 Columbia, South Carolina, burns down during American Civil war",
								"1876 Sardines first canned by Julius Wolff in Eastport, Maine",
								"1969 Golda Meir sworn in as the first female Prime Minister of Israel",
								"1972 British Parliament votes to join the European Common Market",
								"2017 Discovery of a new mostly underwater continent Zealandia in the South Pacific announced in research journal 'GSA Today'"
						],

			"Events": [
							"1370 Battle at Rudau: Germany beats Lithuania",
							"1461 Wars of the Roses: Second Battle of St Albans - Lancastrian army defeats Yorkists and recaptures King Henry VI",
							"1500 Battle of Hemmingstedt - German peasant army repels ducal army of Schleswig and Holstein",
							"1510 Portuguese admiral Afonso de Albuquerque first conquers the city of Goa, entering it with little conflict",
							"1568 Holy Roman Emperor Maximilian II agrees to pay tribute to the Ottoman Empire for peace",
							"1598 Boris Godunov chosen as Tsar of Russia",
							"1600 Philosopher Giordano Bruno is burned alive at Campo de' Fiori in Rome, charged with heresy by the Roman Inquisition",
							"1621 Myles Standish is elected as the first commander of the Plymouth Colony",
							"1670 France & Bavaria sign military assistance treaty",
							"1691 Thomas Neale granted English patent for American postal service",
							"1714 Parliament of Paris accepts Pope Clemens XI's Unigenitus degree",
							"1772 1st Partition of Poland signed in Vienna by Austria, Prussia and Russia",
							"1791 Messier catalogs M83 (spiral galaxy in Hydra)",
							"1795 Thomas Seddal harvests 8.3-kg potato from his garden Chester, England",
							"1818 Baron Karl von Drais de Sauerbrun patents 'draisine' (early bicycle)",
							"1848 Tuscany gets liberal Constitution",
							"1854 Britain recognises independence of Orange Free State (South Africa)",
							"1882 1st Test Cricket match played at Sydney Cricket Ground",
							"1883 A Ashwell patents free-toilet in London",
							"1902 A general strike in Barcelona and nearby towns leads to government-troop reprisals that leave 40 dead",
							"1905 Frances Willard becomes 1st women honored in National Statuary Hall",
							"1911 1st hydroplane flight to & from a ship (Glenn Curtiss, San Diego)",
							"1913 1st minimum wage law in US takes effect (Oregon)",
							"1930 French government of André Tardieu falls for the first time",
							"1931 1st telecast of a sporting event in Japan (baseball)",
							"1931 Hockey's Hershey Bears (now with AHL) 1st game",
							"1969 Bob Dylan and Johnny Cash record an album; it was never released",
							"1970 Robert Marasco's Child's Play premieres in NYC",
							"1973 Rodney Redmond scores 107 on debut v Pakistan, his only Test Cricket",
							"1989 Former baseball player and manager Leo Durocher injured in a car crash",
							"2002 44th Daytona 500: Ward Burton's win first for Dodge since Richard Petty's victory in the 1974 race",
							"2003 The London Congestion Charge scheme begins.",
							"2012 43rd NAACP Image Awards: The Help wins Outstanding Motion Picture",
							"2013 37 people are killed and 130 are injured in a series of Baghdad car bombings"
					],

			"Birthdays": [
								"1950 Rick Medlocke, rock guitarist/vocalist (Blackfoot)",
								"1952 Insook Bhushan, Seoul Korea, US table tennis player (Olympic-92)",
								"1952 Karin Janz, East German gymnast",
								"1954 Rene Russo, actress (Ransom)",
								"1957 Loreena McKennitt, Canadian musician",
								"1958 Heidi Hagman, actress (Linda-Archie Bunker's Place)",
								"1959 Daniel Ray Danny Ainge, basketball & football star",
								"1961 Guy McIntyre, NFL guard (Philadelphia Eagles)",
								"1962 David McComb, Australia, vocalist/songwriter (Triffids)",
								"1963 Dan Reed, rocker/actor (HOTS, Lake Consequence)",
								"1964 Buster Olney, American sports columnist",
								"1965 Jim Bowie, Japanese-American baseball infielder (Oakland Athletics)",
								"1966 Michael Lepond, American musician",
								"1968 Patrick Uterwijk, pop guitarist (Pestilence, Consuming Impulse)",
								"1969 David Klingler, NFL quarterback (Oakland Raiders, Cin Bengals)",
								"1970 Dominic Purcell, English-born Australian actor (Prison Break), born in Wallasey, England",
								"1971 Denise Richards, American actress",
								"1972 Yuki Isoya, Japanese singer (formerly Judy and Mary)",
								"1973 Raymond Jackson, NFL defensive back (Buffalo Bills)",
								"1974 Bryan White, American singer",
								"1975 Harisu, South Korean singer, model and actress",
								"1976 Kelly Carlson, American actress",
								"1979 Josh Willingham, American baseball player",
								"1980 Al Harrington, American basketball player",
								"1982 Joseph Gordon-Levitt, actor (Tommy Solomon-Third Rock From the Sun)",
								"1985 Anne Curtis, Filipino actress and commercial model",
								"1986 Joey O'Brien, Irish footballer",
								"1988 Natascha Kampusch, Austrian kidnapping victim",
								"1991 Ed Sheeran, English singer-songwriter (Shape of You, Thinking Out Loud), born in Halifax, England",
								"1992 Meaghan Jette Martin, American child actress and singer",
								"1995 Madison Keys, American tennis player (US Open runner-up 2017), born in Rock Island, Illinois",
								"1996 Sasha Pieterse, South African child actress"
						],

			"Weddings": [
							"1841 Dutch ex-king Willem I marries Henriette d'Oultremont de Wégimont",
							"1906 26th US President Theodore Roosevelt's daughter Alice marries in the White House",
							"1950 Natural history broadcaster David Attenborough (24) weds Jane Elizabeth Ebsworth Oriel",
							"1955 Novelist J. D. Salinger (36) weds Claire Douglas",
							"1989 Whitesnake's rocker David Coverdale weds actress Tawny Kitaen",
							"2002 Actress Joan Collins (68) weds theater company manager Percy Gibson at Claridge's Hotel in London",
							"2007 Japanese actress Noria Fujiwara weds comedian Tomonori at Jinnai Ikuta Shrine in Kobe, Japan",
							"2007 Home and Away actress Ada Nicodemou (29) weds Chrys Xipolitas at St. Andrew's Greek church in Redfern, Australia",
							"2007 Australian TV presenter Natalie Gruzlewski (30) weds pro surfer Luke Egan at St. Augustine's Catholic Church"
					],

			"Sports": [
							"2007 Australian TV presenter Natalie Gruzlewski (30) weds pro surfer Luke Egan at St. Augustine's Catholic Church"
					],

			"Deaths": [
							"1991 Enrique Bermudez, commandant (Contra), dies",
							"1993 Alfredo de Leon, leader (Philippines Red Scorpio Gang), killed",
							"1994 Randy Shilts, American journalist (& the band played on), dies of AIDs at 41",
							"1995 Jan Bart Klaster, music editor (The Slogan), dies at 50",
							"1996 Bentley Bridgewater, British Museum secretary, dies at 84",
							"1996 Jean Writer-Pierre Herve Bazin, dies at 84",
							"1997 Zein Isa, Palestinian militant imprisoned in the United States for the honor killing of his daughter",
							"1998 Bob Merrill, American composer and lyricist (People, Mambo Italiano), commits suicide at 72",
							"1999 Shirley Stoler, American actress (The Honeymoon Killers, Seven Beauties), dies at 69",
							"2001 Khalid Abdul Muhammed, American Nation of Islam spokesman (b. 1948)",
							"2001 Bob Geary, Canadian football player and manager (b. 1933)",
							"2003 Frank Thistlethwaite, English academic and Vice Chancellor (University of East Anglia), dies at 87",
							"2004 José López Portillo, President of Mexico (b. 1920)",
							"2005 Daniel Dan O'Herlihy, Irish actor (Twin Peaks, Fail Safe, Last Starfighter, Robocop), dies of natural causes at 85",
							"2006 Bill Cowsill, American singer (The Cowsills), dies at 58",
							"2007 Jurga Ivanauskaitė, Lithuanian writer (b. 1961)",
							"2007 Mike Awesome, American professional wrestler (b. 1965)",
							"2008 Brian Harris, English footballer (b. 1935)",
							"2009 Gazanfer Özcan, Turkish actor (b. 1931)",
							"2009 Conchita Cintrón, Chilean bullfighter (b. 1922)",
							"2010 Kathryn Grayson [Zelma Hedrick], American vocalist and actress (Anchors Aweigh, Kiss Me Kate), dies of natural causes at 88",
							"2011 Egbert van Paridon, Dutch actor and director (Flodder, The Assault), dies at 90",
							"2012 Ulric Neisser, American psychologist, dies at 83",
							"2013 Richard Briers, English actor, dies from emphysema at 79",
							"2014 Bob Casale, American musician, dies from heart failure at 61",
							"2015 Andrzej Koszewski, Polish composer, dies at 92",
							"2016 Tony Phillips, American MLB player (Oakland Athletics), dies at 56",
							"2017 Peter Richardson, British cricketer (England batsman mid-50's), dies at 85",
							"2017 Warren Frost, American actor (Twin Peaks, Matlock, Seinfeld), dies at 91",
							"2018 Arno Motulsky, German-born founder of medical genetics, known as the father of pharmacogenomics, dies at 94"
					],
		},

];
	
    $('#dofilter').click(function(){
        $('#mylisting p').remove();
    
        $.each(jsonData, function(index, val){
            
            if (val.dob === $('#filterDate').val()) {
            	$('#mylisting').append(`<p><b>Highlights:</b><br> ${val.Highlights} </p>`);
            	$('#mylisting').append(`<p><b>Events:</b><br> ${val.Events} </p>`);
            	$('#mylisting').append(`<p><b>Birthdays:</b><br> ${val.Birthdays} </p>`);
            	$('#mylisting').append(`<p><b>Weddings:</b><br> ${val.Weddings} </p>`);
            	$('#mylisting').append(`<p><b>Sports:</b><br> ${val.Sports} </p>`);
            	$('#mylisting').append(`<p><b>Deaths:</b><br> ${val.Deaths} </p>`);

            	$("#navigation ul.nav > li > a").on("click", function () {
            		$('#mylisting p').remove();
  					$('#infolist p').remove();

  					if (($(this).text()) === 'Highlights') {
  						$('#infolist').append(`<p><b>Highlights:</b><br> ${val.Highlights} </p>`);
  					};
  					if (($(this).text()) === 'Events') {
  						$('#infolist').append(`<p><b>Events:</b><br> ${val.Events} </p>`);
  					};
  					if (($(this).text()) === 'Birthdays') {
  						$('#infolist').append(`<p><b>Birthdays:</b><br> ${val.Birthdays} </p>`);
  					};
  					if (($(this).text()) === 'Weddings') {
  						$('#infolist').append(`<p><b>Weddings:</b><br> ${val.Weddings} </p>`);
  					};
  					if (($(this).text()) === 'Sports') {
  						$('#infolist').append(`<p><b>Sports:</b><br> ${val.Sports} </p>`);
  					};
  					if (($(this).text()) === 'Deaths') {
  						$('#infolist').append(`<p><b>Deaths:</b><br> ${val.Deaths} </p>`);
  					};
  				});
            };

        });
    });
    
    $('#dofilter').click();

});