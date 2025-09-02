"use client"

import { useState, useEffect } from "react"
import React from "react"
import {
  Home,
  Users,
  Users2,
  Car,
  Package,
  X,
  User,
  CloudSun,
  Shield,
  MapPin,
  HeartPulse ,
  Settings,
  Ban,
  UserX,
  Heart,
  AlertTriangle,
  Wrench,
  Skull,
  Github,
  UserCheck,
  Eye,
  Plus,
  Info,
  DollarSign,
  CheckCircle,
  Sun,
  Moon,
} from "lucide-react"

const AdminPanel = () => {
  const [activeSection, setActiveSection] = useState("inicio")
  const [isTextAnimated, setIsTextAnimated] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [modalType, setModalType] = useState("")
  const [modalData, setModalData] = useState({})
  const [showItemModal, setShowItemModal] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)
  const [showPlayerIdModal, setShowPlayerIdModal] = useState(false)
  const [itemActionData, setItemActionData] = useState({})
  const [showPlayerInfoModal, setShowPlayerInfoModal] = useState(false)
  const [showPlayerActionsModal, setShowPlayerActionsModal] = useState(false)
  const [selectedPlayer, setSelectedPlayer] = useState(null)
  const [showGroupModal, setShowGroupModal] = useState(false)
  const [selectedGroup, setSelectedGroup] = useState(null)
  const [groupPlayerId, setGroupPlayerId] = useState("")
  const [groupLevel, setGroupLevel] = useState("")
  const [activeTab, setActiveTab] = useState("inicio")
  const [selectedVehicle, setSelectedVehicle] = useState(null)
  const [showVehicleModal, setShowVehicleModal] = useState(false)
  const [showPlayerModal, setShowPlayerModal] = useState(false)
  const [showAdminModal, setShowAdminModal] = useState(false)
  const [adminAction, setAdminAction] = useState(null)
  const [itemAction, setItemAction] = useState("")
  const [vehicleAction, setVehicleAction] = useState("")
  const [notification, setNotification] = useState(null)
  const [isDarkMode, setIsDarkMode] = useState(true)

  const showNotification = (message, type = "success") => {
    setNotification({ message, type })
    setTimeout(() => setNotification(null), 3000)
  }

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
    showNotification(`Tema ${!isDarkMode ? "escuro" : "claro"} ativado!`)
  }

  const getSectionIcon = () => {
    switch (activeSection) {
      case "inicio":
        return Home
      case "jogadores":
        return Users
      case "grupos":
        return UserCheck
      case "veiculos":
        return Car
      case "itens":
        return Package
      default:
        return Home
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTextAnimated(true)
    }, 300)
    return () => clearTimeout(timer)
  }, [])

const onlinePlayers = [
    {
      id: 1,
      serverId: 1,
      firstName: "Anderson",
      lastName: "Junior",
      phone: "(43) 9666-1234",
      bankBalance: 75654645,
      cash: 21315,
      group: "Owner",
      inventory: [
        { name: "AWM", quantity: 1 },
        { name: "Bandagem", quantity: 5 },
        { name: "Munição AWM", quantity: 165 },
      ],
      vehicles: ["Jetta GLI"],
      onlineTime: "12h 15min",
    },
    {
      id: 2,
      serverId: 1002,
      firstName: "Maria",
      lastName: "Santos",
      phone: "(11) 98888-5678",
      bankBalance: 89000,
      cash: 1200,
      group: "ComandoVermelho",
      inventory: [
        { name: "Pistola", quantity: 1 },
        { name: "Lockpick", quantity: 3 },
      ],
      vehicles: ["T20"],
      onlineTime: "1h 20min",
    },
    {
      id: 3,
      serverId: 1003,
      firstName: "Carlos",
      lastName: "Oliveira",
      phone: "(11) 97777-9012",
      bankBalance: 45000,
      cash: 800,
      group: "Cidadão",
      inventory: [
        { name: "Celular", quantity: 1 },
        { name: "Carteira", quantity: 1 },
      ],
      vehicles: [],
      onlineTime: "45min",
    },
    {
      id: 4,
      serverId: 1004,
      firstName: "Ana",
      lastName: "Costa",
      phone: "(11) 96666-3456",
      bankBalance: 156000,
      cash: 3200,
      group: "Médicos",
      inventory: [
        { name: "Kit Médico", quantity: 10 },
        { name: "Bandagem", quantity: 15 },
      ],
      vehicles: ["Ambulância"],
      onlineTime: "3h 12min",
    },
    {
      id: 5,
      serverId: 1001,
      firstName: "João",
      lastName: "Silva",
      phone: "(11) 99999-1234",
      bankBalance: 125000,
      cash: 2500,
      group: "PolíciaFederal",
      inventory: [
        { name: "AK-47", quantity: 1 },
        { name: "Bandagem", quantity: 5 },
        { name: "Celular", quantity: 1 },
      ],
      vehicles: ["Adder", "Zentorno"],
      onlineTime: "2h 45min",
    },
    {
      id: 6,
      serverId: 1005,
      firstName: "Lucas",
      lastName: "Ferreira",
      phone: "(21) 97777-1111",
      bankBalance: 34000,
      cash: 600,
      group: "Mecânicos",
      inventory: [
        { name: "Ferramenta", quantity: 3 },
        { name: "Gasolina", quantity: 2 },
      ],
      vehicles: ["Tow Truck"],
      onlineTime: "50min",
    },
    {
      id: 7,
      serverId: 1006,
      firstName: "Beatriz",
      lastName: "Almeida",
      phone: "(31) 95555-2222",
      bankBalance: 540000,
      cash: 12500,
      group: "Milícia",
      inventory: [
        { name: "Fuzil M4", quantity: 1 },
        { name: "Colete", quantity: 2 },
      ],
      vehicles: ["Kuruma Blindado"],
      onlineTime: "4h 10min",
    },
    {
      id: 8,
      serverId: 1007,
      firstName: "Pedro",
      lastName: "Martins",
      phone: "(19) 92222-3333",
      bankBalance: 22000,
      cash: 450,
      group: "Cidadão",
      inventory: [
        { name: "Pesca Vara", quantity: 1 },
        { name: "Peixe", quantity: 12 },
      ],
      vehicles: ["Bicicleta"],
      onlineTime: "30min",
    },
    {
      id: 9,
      serverId: 1008,
      firstName: "Fernanda",
      lastName: "Lima",
      phone: "(41) 93333-4444",
      bankBalance: 98500,
      cash: 3000,
      group: "PolíciaCivil",
      inventory: [
        { name: "Taser", quantity: 1 },
        { name: "Algemas", quantity: 2 },
      ],
      vehicles: ["SUV Blindado"],
      onlineTime: "2h 5min",
    },
    {
      id: 10,
      serverId: 1009,
      firstName: "Ricardo",
      lastName: "Souza",
      phone: "(51) 94444-5555",
      bankBalance: 1500000,
      cash: 50000,
      group: "MafiaItaliana",
      inventory: [
        { name: "Uzi", quantity: 2 },
        { name: "Cocaína", quantity: 15 },
      ],
      vehicles: ["Lamborghini Aventador", "Helicóptero"],
      onlineTime: "8h 30min",
    },
  ];

  const serverGroups = [
    {
      id: 1,
      name: "PolíciaFederal",
      description: "Força policial federal",
      color: "green",
      members: 12,
      maxLevel: 5,
    },
    {
      id: 2,
      name: "ComandoVermelho",
      description: "Organização criminosa",
      color: "green",
      members: 8,
      maxLevel: 4,
    },
    {
      id: 3,
      name: "Médicos",
      description: "Profissionais da saúde",
      color: "green",
      members: 6,
      maxLevel: 3,
    },
    {
      id: 4,
      name: "Bombeiros",
      description: "Corpo de bombeiros",
      color: "green",
      members: 4,
      maxLevel: 3,
    },
    {
      id: 5,
      name: "Mecânicos",
      description: "Oficina mecânica",
      color: "green",
      members: 5,
      maxLevel: 2,
    },
    {
      id: 6,
      name: "Milicia",
      description: "Organização criminosa",
      color: "green",
      members: 12,
      maxLevel: 5,
    },
  ]

  const gameItems = [
    {
      id: 1,
      name: "AK-47",
      image: "/ak47-weapon.png",
      category: "Armas",
    },
    {
      id: 2,
      name: "Bandagem",
      image: "/medical-bandage.png",
      category: "Médico",
    },
    {
      id: 3,
      name: "Chave Inglesa",
      image: "/wrench-tool.png",
      category: "Ferramentas",
    },
    {
      id: 4,
      name: "Colete à Prova de Balas",
      image: "/bulletproof-vest.png",
      category: "Proteção",
    },
    {
      id: 5,
      name: "Smartphone",
      image: "/modern-smartphone.png",
      category: "Eletrônicos",
    },
    {
      id: 6,
      name: "Carteira",
      image: "/leather-wallet.png",
      category: "Pessoal",
    },
    {
      id: 7,
      name: "Energético",
      image: "/energy-drink-can.png",
      category: "Consumíveis",
    },
    {
      id: 8,
      name: "Lockpick",
      image: "/lockpick-tool.png",
      category: "Ferramentas",
    },
  ]

  const gameVehicles = [
    {
      id: 1,
      name: "Adder",
      image: "/luxury-sports-car-adder.png",
      category: "Super",
    },
    {
      id: 2,
      name: "Zentorno",
      image: "/zentorno-supercar.png",
      category: "Super",
    },
    {
      id: 3,
      name: "T20",
      image: "/t20-hypercar.png",
      category: "Super",
    },
    {
      id: 4,
      name: "Insurgent",
      image: "/military-insurgent-vehicle.png",
      category: "Off-Road",
    },
    {
      id: 5,
      name: "Buzzard",
      image: "/buzzard-helicopter.png",
      category: "Helicopters",
    },
    {
      id: 6,
      name: "Police Cruiser",
      image: "/police-car-cruiser.png",
      category: "Emergency",
    },
    {
      id: 7,
      name: "Fire Truck",
      image: "/fire-truck-emergency.png",
      category: "Emergency",
    },
    {
      id: 8,
      name: "Ambulance",
      image: "/ambulance-emergency-vehicle.png",
      category: "Emergency",
    },
  ]

  const navigationItems = [
    { id: "inicio", label: "Início", icon: Home },
    { id: "jogadores", label: "Jogadores", icon: Users },
    { id: "grupos", label: "Grupos", icon: Users2 },
    { id: "veiculos", label: "Veículos", icon: Car },
    { id: "itens", label: "Itens", icon: Package },
  ]

  const quickActions = [
    { icon: Shield, label: "Segurança", action: "setColete" },
    { icon: HeartPulse , label: "God", action: "setarVida" },
    { icon: MapPin , label: "Configurações", action: "pegarCds" },
    { icon: CloudSun, label: "Usuários", action: "mudaClima" },
  ]

  const handleQuickAction = (action) => {
    switch (action.action) {
      case "setColete":
        showNotification("Colete setado com sucesso!")
        break
      case "setarVida":
        showNotification("Voçê se deu GOD!")
        break
      case "pegarCds":
        showNotification("Você pegou sua cordenada com sucesso!")
        break
      case "mudaClima":
        showNotification("Clima alterado com sucesso!")
        break
      default:
        showNotification("Ação executada com sucesso!")
    }
  }

  const adminActions = [
    {
      label: "EXPULSAR ID",
      icon: UserX,
      variant: "destructive",
      description: "Expulsar jogador por ID",
      type: "kick",
    },
    {
      label: "LIBERAR WL",
      icon: Shield,
      variant: "primary",
      description: "Liberar whitelist",
      type: "whitelist_add",
    },
    {
      label: "REVIVER ID",
      icon: Heart,
      variant: "secondary",
      description: "Reviver jogador",
      type: "revive",
    },
    {
      label: "EXPULSAR TODOS",
      icon: UserX,
      variant: "destructive",
      description: "Expulsar todos os jogadores",
      type: "kick_all",
    },
    {
      label: "REMOVER WL",
      icon: Ban,
      variant: "destructive",
      description: "Remover da whitelist",
      type: "whitelist_remove",
    },
    {
      label: "REVIVER TODOS",
      icon: Heart,
      variant: "secondary",
      description: "Reviver todos os jogadores",
      type: "revive_all",
    },
    {
      label: "BANIR ID",
      icon: Ban,
      variant: "destructive",
      description: "Banir jogador por ID",
      type: "ban",
    },
    {
      label: "UNBAN ID",
      icon: Shield,
      variant: "primary",
      description: "Desbanir jogador",
      type: "unban",
    },
    {
      label: "MATAR ID",
      icon: Skull,
      variant: "destructive",
      description: "Eliminar jogador",
      type: "kill",
    },
    {
      label: "ADVERTÊNCIA ID",
      icon: AlertTriangle,
      variant: "warning",
      description: "Advertir jogador",
      type: "warn",
    },
    {
      label: "MELHORAR VEÍCULO",
      icon: Wrench,
      variant: "primary",
      description: "Upgrade de veículo",
      type: "upgrade_vehicle",
    },
    {
      label: "MATAR TODOS",
      icon: Skull,
      variant: "destructive",
      description: "Eliminar todos os jogadores",
      type: "kill_all",
    },
  ]

  const handleAdminAction = (action) => {
    setModalType(action.type)
    setModalData({ title: action.label, description: action.description })
    setShowModal(true)
  }

  const handleItemClick = (item) => {
    setSelectedItem(item)
    setShowItemModal(true)
  }

  const handleVehicleClick = (vehicle) => {
    setSelectedItem(vehicle)
    setShowItemModal(true)
  }

  const handleModalSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData.entries())
    console.log(`[v0] Admin action ${modalType}:`, data)
    setShowModal(false)
    setModalData({})
  }

  const handleItemAction = (action, quantity) => {
    if (action === "give") {
      setItemActionData({ action, quantity, item: selectedItem })
      setShowItemModal(false)
      setShowPlayerIdModal(true)
    } else {
      console.log(`[v0] Item action ${action} for ${selectedItem.name}:`, quantity)
      setShowItemModal(false)
      setSelectedItem(null)
    }
  }

  const handlePlayerInfo = (player) => {
    setSelectedPlayer(player)
    setShowPlayerInfoModal(true)
  }

  const handlePlayerActions = (player) => {
    setSelectedPlayer(player)
    setShowPlayerActionsModal(true)
  }

  const handlePlayerActionSubmit = (actionType) => {
    setShowPlayerActionsModal(false)
    setModalType(actionType)
    setModalData({
      title: getActionTitle(actionType),
      description: `Ação para ${selectedPlayer.firstName} ${selectedPlayer.lastName}`,
      playerId: selectedPlayer.serverId,
    })
    setShowModal(true)
  }

  const getActionTitle = (actionType) => {
    const actions = {
      set_money: "SETAR DINHEIRO",
      set_item: "SETAR ITEM",
      set_vehicle: "SETAR VEÍCULO",
      revive: "REVIVER JOGADOR",
      kill: "MATAR JOGADOR",
      ban: "BANIR JOGADOR",
      whitelist_remove: "REMOVER WL",
    }
    return actions[actionType] || actionType.toUpperCase()
  }

  const handleVehicleAction = (action) => {
    if (action === "give") {
      setItemActionData({ action, item: selectedItem })
      setShowItemModal(false)
      setShowPlayerIdModal(true)
    } else {
      console.log(`[v0] Vehicle action ${action} for ${selectedItem.name}`)
      setShowItemModal(false)
      setSelectedItem(null)
    }
  }

  const handlePlayerIdSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const playerId = formData.get("playerId")
    console.log(
      `[v0] Item action ${itemActionData.action} for ${itemActionData.item.name} to player ${playerId}:`,
      itemActionData.quantity,
    )
    setShowPlayerIdModal(false)
    setSelectedItem(null)
    setItemActionData({})
  }

  const renderSectionContent = () => {
    switch (activeSection) {
      case "jogadores":
        return (
          <div className="space-y-6">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-foreground mb-2">Gerenciar Jogadores</h2>
              <p className="text-muted-foreground">Visualize e gerencie todos os jogadores online</p>
            </div>

            <div className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden shadow-2xl">
              <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 px-6 py-4 border-b border-slate-700/50">
                <div className="grid grid-cols-12 gap-4 text-sm font-semibold text-slate-200">
                  <div className="col-span-1">ID</div>
                  <div className="col-span-2">Jogador</div>
                  <div className="col-span-2">Grupo</div>
                  <div className="col-span-2">Telefone</div>
                  <div className="col-span-2">Banco</div>
                  <div className="col-span-1">Dinheiro</div>
                  <div className="col-span-2">Ações</div>
                </div>
              </div>
              <div className="divide-y divide-slate-700/30">
                {onlinePlayers.map((player) => (
                  <div key={player.id} className="px-6 py-4 hover:bg-slate-800/40 transition-all duration-200 group">
                    <div className="grid grid-cols-12 gap-4 items-center">
                      <div className="col-span-1">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          <span className="text-blue-400 font-mono font-bold">{player.serverId}</span>
                        </div>
                      </div>
                      <div className="col-span-2">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                            <User className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <p className="text-slate-100 font-semibold text-sm">
                              {player.firstName} {player.lastName}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-span-2">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            player.group === "Cidadão"
                              ? "bg-slate-600/30 text-slate-300"
                              : player.group === "PolíciaFederal"
                                ? "bg-blue-500/20 text-blue-400"
                                : player.group === "ComandoVermelho"
                                  ? "bg-red-500/20 text-red-400"
                                  : player.group === "Médicos"
                                    ? "bg-green-500/20 text-green-400"
                                    : "bg-yellow-500/20 text-yellow-400"
                          }`}
                        >
                          {player.group}
                        </span>
                      </div>
                      <div className="col-span-2">
                        <span className="text-slate-300 font-mono text-sm">{player.phone}</span>
                      </div>
                      <div className="col-span-2">
                        <span className="text-green-400 font-bold">R$ {player.bankBalance.toLocaleString()}</span>
                      </div>
                      <div className="col-span-1">
                        <span className="text-yellow-400 font-bold">R$ {player.cash.toLocaleString()}</span>
                      </div>
                      <div className="col-span-2">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handlePlayerInfo(player)}
                            className="p-2 bg-blue-500/20 hover:bg-blue-500/40 text-blue-400 rounded-lg transition-all duration-200 hover:scale-105 shadow-lg"
                            title="Ver informações"
                          >
                            <Info className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handlePlayerActions(player)}
                            className="p-2 bg-slate-600/20 hover:bg-slate-600/40 text-slate-300 rounded-lg transition-all duration-200 hover:scale-105 shadow-lg"
                            title="Ações administrativas"
                          >
                            <Settings className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )
      case "grupos":
        return (
          <div className="space-y-6">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-foreground mb-2">Gerenciar Grupos</h2>
              <p className="text-muted-foreground">Configure grupos e permissões do servidor</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serverGroups.map((group) => (
                <div
                  key={group.id}
                  className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full bg-${group.color}-400`}></div>
                      <h3 className="text-lg font-semibold text-slate-100">{group.name}</h3>
                    </div>
                    <button
                      onClick={() => {
                        setSelectedGroup(group)
                        setShowGroupModal(true)
                      }}
                      className="p-2 bg-slate-600/20 hover:bg-slate-600/40 text-slate-300 rounded-lg transition-all duration-200 hover:scale-110"
                      title="Gerenciar grupo"
                    >
                      <Settings className="w-4 h-4" />
                    </button>
                  </div>

                  <p className="text-slate-400 text-sm mb-4">{group.description}</p>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Membros:</span>
                      <span className="text-slate-200 font-medium">{group.members}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Níveis:</span>
                      <span className="text-slate-200 font-medium">1 - {group.maxLevel}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      case "veiculos":
        return (
          <div className="space-y-6">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-foreground mb-2">Gerenciar Veículos</h2>
              <p className="text-muted-foreground">Controle veículos e garagens do servidor</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {gameVehicles.map((vehicle) => (
                <div
                  key={vehicle.id}
                  onClick={() => handleVehicleClick(vehicle)}
                  className="group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:scale-[1.02] cursor-pointer overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="flex flex-col items-center space-y-4">
                      <div className="w-20 h-20 bg-slate-700/50 rounded-xl overflow-hidden border border-slate-600/50 group-hover:border-blue-500/30 transition-colors">
                        <img
                          src={vehicle.image || "/placeholder.svg"}
                          alt={vehicle.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="text-center">
                        <h3 className="text-base font-semibold text-white group-hover:text-blue-400 transition-colors mb-1">
                          {vehicle.name}
                        </h3>
                        <span className="inline-block px-3 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full border border-slate-600/50">
                          {vehicle.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      case "itens":
        return (
          <div className="space-y-6">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-foreground mb-2">Gerenciar Itens</h2>
              <p className="text-muted-foreground">Configure itens e inventários do servidor</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {gameItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleItemClick(item)}
                  className="group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:scale-[1.02] cursor-pointer overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="flex flex-col items-center space-y-4">
                      <div className="w-20 h-20 bg-slate-700/50 rounded-xl overflow-hidden border border-slate-600/50 group-hover:border-cyan-500/30 transition-colors">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="text-center">
                        <h3 className="text-base font-semibold text-white group-hover:text-cyan-400 transition-colors mb-1">
                          {item.name}
                        </h3>
                        <span className="inline-block px-3 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full border border-slate-600/50">
                          {item.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      default:
        return (
          <div className="space-y-8">
            <div className="mb-6">
              <h2
                className={`text-xl font-semibold mb-2 transition-colors duration-500 ${
                  isDarkMode ? "text-white" : "text-slate-900"
                }`}
              >
                Ações de Administração
              </h2>
              <p className={`transition-colors duration-500 ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>
                Execute comandos administrativos do servidor
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {adminActions.map((action, index) => {
                const Icon = action.icon
                return (
                  <div
                    key={index}
                    onClick={() => handleAdminAction(action)}
                    className={`group relative overflow-hidden rounded-xl border cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${
                      isDarkMode
                        ? "bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-slate-700/50 hover:border-slate-600/50"
                        : "bg-gradient-to-br from-white/80 to-slate-50/80 border-slate-300/50 hover:border-slate-400/50"
                    }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div className="relative p-4 flex flex-col items-center space-y-3">
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${getButtonVariant(action.variant)}`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <span
                        className={`text-xs font-medium text-center leading-tight transition-colors duration-500 ${
                          isDarkMode ? "text-slate-300" : "text-slate-700"
                        }`}
                      >
                        {action.label}
                      </span>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  </div>
                )
              })}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-card-foreground">127</p>
                    <p className="text-sm text-muted-foreground">Jogadores Online</p>
                  </div>
                </div>
              </div>

              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-card-foreground">1,234</p>
                    <p className="text-sm text-muted-foreground">Usuários na WL</p>
                  </div>
                </div>
              </div>

              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-card-foreground">3</p>
                    <p className="text-sm text-muted-foreground">Alertas Ativos</p>
                  </div>
                </div>
              </div>

              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
                    <Ban className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-card-foreground">47</p>
                    <p className="text-sm text-muted-foreground">Banimentos</p>
                  </div>
                </div>
              </div>

              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                    <Eye className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-card-foreground">12</p>
                    <p className="text-sm text-muted-foreground">Suspeitos</p>
                  </div>
                </div>
              </div>

              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <UserCheck className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-card-foreground">8</p>
                    <p className="text-sm text-muted-foreground">Staffs Online</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
  }

  const getButtonVariant = (variant) => {
    const baseClasses = "group-hover:scale-110 transition-all duration-300"

    if (isDarkMode) {
      switch (variant) {
        case "destructive":
          return `${baseClasses} bg-red-500/20 text-red-400 group-hover:bg-red-500/30`
        case "primary":
          return `${baseClasses} bg-blue-500/20 text-blue-400 group-hover:bg-blue-500/30`
        case "secondary":
          return `${baseClasses} bg-green-500/20 text-green-400 group-hover:bg-green-500/30`
        case "warning":
          return `${baseClasses} bg-amber-500/20 text-amber-400 group-hover:bg-amber-500/30`
        default:
          return `${baseClasses} bg-slate-500/20 text-slate-400 group-hover:bg-slate-500/30`
      }
    } else {
      switch (variant) {
        case "destructive":
          return `${baseClasses} bg-red-100 text-red-600 group-hover:bg-red-200`
        case "primary":
          return `${baseClasses} bg-blue-100 text-blue-600 group-hover:bg-blue-200`
        case "secondary":
          return `${baseClasses} bg-green-100 text-green-600 group-hover:bg-green-200`
        case "warning":
          return `${baseClasses} bg-amber-100 text-amber-600 group-hover:bg-amber-200`
        default:
          return `${baseClasses} bg-slate-100 text-slate-600 group-hover:bg-slate-200`
      }
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 transition-all duration-500">
      <div
        className={`w-[1500px] h-[800px] rounded-2xl shadow-2xl backdrop-blur-xl border overflow-hidden transition-all duration-500 ${
          isDarkMode ? "bg-slate-800/90 border-slate-700/50" : "bg-white/90 border-slate-300/50"
        }`}
      >
        <div className="flex h-full">
          <div
            className={`w-64 border-r flex flex-col transition-all duration-500 ${
              isDarkMode ? "bg-slate-900/50 border-slate-700/50" : "bg-slate-50/80 border-slate-300/50"
            }`}
          >
            <div className="p-6 border-b border-slate-700/50">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3
                    className={`font-semibold transition-colors duration-500 ${
                      isDarkMode ? "text-white" : "text-slate-900"
                    }`}
                  >
                    Nome do usuário
                  </h3>
                  <p
                    className={`text-sm transition-colors duration-500 ${
                      isDarkMode ? "text-slate-400" : "text-slate-600"
                    }`}
                  >
                    Administrador
                  </p>
                </div>

                <button
                  onClick={toggleTheme}
                  className={`p-2 rounded-lg transition-all duration-200 hover:scale-110 ${
                    isDarkMode
                      ? "bg-slate-700/50 hover:bg-slate-600/50 text-yellow-400"
                      : "bg-slate-200/50 hover:bg-slate-300/50 text-slate-700"
                  }`}
                  title={isDarkMode ? "Modo Claro" : "Modo Escuro"}
                >
                  {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <nav className="flex-1 p-4">
              <ul className="space-y-2">
                {navigationItems.map((item) => {
                  const Icon = item.icon
                  const isActive = activeSection === item.id
                  return (
                    <li key={item.id}>
                      <button
                        onClick={() => setActiveSection(item.id)}
                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                          isActive
                            ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg"
                            : `text-slate-300 hover:bg-slate-800/50 hover:text-white ${isDarkMode ? "" : "text-slate-700"}`
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="font-medium">{item.label}</span>
                      </button>
                    </li>
                  )
                })}
              </ul>
            </nav>

            <div className="p-4 border-t border-slate-700/50">
              <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Ações Rápidas</h3>
              <div className="grid grid-cols-2 gap-2">
                {quickActions.map((action, index) => {
                  const Icon = action.icon
                  return (
                    <button
                      key={index}
                      onClick={() => handleQuickAction(action)}
                      className="p-3 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg transition-colors group"
                      title={action.label}
                    >
                      <Icon className="w-5 h-5 text-slate-300 mx-auto" />
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col">
            <header
              className={`relative p-8 text-white overflow-hidden border-b transition-all duration-500 ${
                isDarkMode
                  ? "bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm border-slate-700/50"
                  : "bg-gradient-to-r from-blue-500/30 to-cyan-500/30 backdrop-blur-sm border-slate-300/50"
              }`}
            >
              <button
                onClick={() => {
                  setNotification("Painel fechado com sucesso!")
                  // Aqui você pode adicionar a lógica para fechar o painel
                  console.log("[v0] Panel close requested")
                }}
                className={`absolute top-4 right-4 z-20 p-2 rounded-lg transition-all duration-200 hover:scale-110 hover:rotate-90 ${
                  isDarkMode
                    ? "bg-red-500/20 hover:bg-red-500/30 text-red-400 hover:text-red-300"
                    : "bg-red-500/20 hover:bg-red-500/30 text-red-600 hover:text-red-500"
                }`}
                title="Fechar Painel"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative z-10">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                    {React.createElement(getSectionIcon(), { className: "w-6 h-6" })}
                  </div>
                  <div>
                    <h1
                      className={`text-2xl font-bold text-balance transition-all duration-1000 ${
                        isTextAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                      } ${isDarkMode ? "text-white" : "text-slate-800"}`}
                    >
                      Bem-vindo ao painel de administração!
                    </h1>
                    <p
                      className={`text-sm transition-all duration-1000 delay-300 ${
                        isTextAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                      } ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}
                    >
                      Gerencie seu servidor FiveM com facilidade
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 right-4 w-32 h-32 bg-blue-400/20 rounded-full blur-xl"></div>
                <div className="absolute bottom-4 right-20 w-24 h-24 bg-cyan-400/10 rounded-full blur-lg"></div>
              </div>
            </header>

            <div className="flex-1 p-8 overflow-auto">
              <div className="w-full custom-scrollbar">{renderSectionContent()}</div>
            </div>

            <footer className="border-t border-slate-700/50 bg-slate-900/50 backdrop-blur-sm px-8 py-4">
              <div className="flex items-center justify-center space-x-2">
                <p className="text-xs text-slate-400">
                  Copyright © 2025 by Anderson Júnior | Todos os direitos reservados.
                </p>
                <a
                  href="https://github.com/AndersonJunior06"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 p-1 hover:bg-slate-800/50 rounded transition-colors"
                  title="GitHub"
                >
                  <Github className="w-4 h-4 text-slate-400 hover:text-white" />
                </a>
              </div>
            </footer>
          </div>
        </div>
      </div>

      {notification && (
        <div
          className={`fixed top-4 right-4 z-50 px-6 py-3 rounded-lg shadow-lg border backdrop-blur-sm animate-in slide-in-from-top-2 duration-300 ${
            notification.type === "success"
              ? "bg-green-500/20 border-green-500/50 text-green-400"
              : "bg-red-500/20 border-red-500/50 text-red-400"
          }`}
        >
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-4 h-4" />
            <span className="text-sm font-medium">{notification.message}</span>
          </div>
        </div>
      )}

      {showItemModal && selectedItem && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 w-96 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">{selectedItem.name}</h3>
              <button
                onClick={() => setShowItemModal(false)}
                className="p-1 hover:bg-slate-800/50 rounded transition-colors"
              >
                <X className="w-5 h-5 text-slate-400" />
              </button>
            </div>

            <div className="flex items-center space-x-4 mb-6">
              <img
                src={selectedItem.image || "/placeholder.svg"}
                alt={selectedItem.name}
                className="w-16 h-16 bg-slate-800/50 rounded-lg object-cover"
              />
              <div>
                <p className="text-slate-300 text-sm">Categoria: {selectedItem.category}</p>
              </div>
            </div>

            <div className="space-y-4">
              {activeSection === "itens" && (
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Quantidade</label>
                  <input
                    type="number"
                    id="itemQuantity"
                    min="1"
                    defaultValue="1"
                    className="w-full px-3 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              )}

              <div className="flex space-x-3 pt-4">
                <button
                  onClick={() => {
                    const quantity = activeSection === "itens" ? document.getElementById("itemQuantity")?.value : "1"
                    if (activeSection === "veiculos") {
                      handleVehicleAction("spawn")
                    } else {
                      handleItemAction("spawn", quantity)
                    }
                  }}
                  className="flex-1 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-lg transition-all flex items-center justify-center space-x-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>Spawnar</span>
                </button>
                <button
                  onClick={() => {
                    const quantity = activeSection === "itens" ? document.getElementById("itemQuantity")?.value : "1"
                    if (activeSection === "veiculos") {
                      handleVehicleAction("give")
                    } else {
                      handleItemAction("give", quantity)
                    }
                  }}
                  className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-lg transition-all flex items-center justify-center space-x-2"
                >
                  <User className="w-4 h-4" />
                  <span>Setar para</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showPlayerInfoModal && selectedPlayer && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 w-full max-w-2xl mx-4">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-white">
                Informações - {selectedPlayer.firstName} {selectedPlayer.lastName}
              </h3>
              <button
                onClick={() => setShowPlayerInfoModal(false)}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <h4 className="text-sm font-medium text-slate-300 mb-3">Informações Básicas</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-400">ID do Servidor:</span>
                      <span className="text-blue-400 font-mono">{selectedPlayer.serverId}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Grupo:</span>
                      <span
                        className={`font-medium ${
                          selectedPlayer.group === "Cidadão"
                            ? "text-slate-300"
                            : selectedPlayer.group === "PolíciaFederal"
                              ? "text-blue-400"
                              : selectedPlayer.group === "ComandoVermelho"
                                ? "text-red-400"
                                : selectedPlayer.group === "Médicos"
                                  ? "text-green-400"
                                  : "text-yellow-400"
                        }`}
                      >
                        {selectedPlayer.group}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Tempo Online:</span>
                      <span className="text-slate-200">{selectedPlayer.onlineTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Dinheiro:</span>
                      <span className="text-yellow-400">R$ {selectedPlayer.cash.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Banco:</span>
                      <span className="text-green-400">R$ {selectedPlayer.bankBalance.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/50 rounded-lg p-4">
                  <h4 className="text-sm font-medium text-slate-300 mb-3">Inventário</h4>
                  <div className="space-y-2">
                    {selectedPlayer.inventory.map((item, index) => (
                      <div key={index} className="flex justify-between text-sm">
                        <span className="text-slate-300">{item.name}</span>
                        <span className="text-slate-400">x{item.quantity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-lg p-4">
                <h4 className="text-sm font-medium text-slate-300 mb-3">Veículos na Garagem</h4>
                <div className="space-y-2">
                  {selectedPlayer.vehicles.length > 0 ? (
                    selectedPlayer.vehicles.map((vehicle, index) => (
                      <div key={index} className="text-sm text-slate-300">
                        {vehicle}
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-slate-400">Nenhum veículo</p>
                  )}
                </div>
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button
                onClick={() => setShowPlayerInfoModal(false)}
                className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}

      {showPlayerActionsModal && selectedPlayer && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 w-96 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-white">
                Ações - {selectedPlayer.firstName} {selectedPlayer.lastName}
              </h3>
              <button
                onClick={() => setShowPlayerActionsModal(false)}
                className="p-1 hover:bg-slate-800/50 rounded transition-colors"
              >
                <X className="w-5 h-5 text-slate-400" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => handlePlayerActionSubmit("set_money")}
                className="p-3 bg-green-500/20 hover:bg-green-500/30 text-green-400 rounded-lg transition-colors flex flex-col items-center space-y-1"
              >
                <DollarSign className="w-5 h-5" />
                <span className="text-xs">Setar Dinheiro</span>
              </button>
              <button
                onClick={() => handlePlayerActionSubmit("set_item")}
                className="p-3 bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 rounded-lg transition-colors flex flex-col items-center space-y-1"
              >
                <Package className="w-5 h-5" />
                <span className="text-xs">Setar Item</span>
              </button>
              <button
                onClick={() => handlePlayerActionSubmit("set_vehicle")}
                className="p-3 bg-orange-500/20 hover:bg-orange-500/30 text-orange-400 rounded-lg transition-colors flex flex-col items-center space-y-1"
              >
                <Car className="w-5 h-5" />
                <span className="text-xs">Setar Carro</span>
              </button>
              <button
                onClick={() => handlePlayerActionSubmit("revive")}
                className="p-3 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded-lg transition-colors flex flex-col items-center space-y-1"
              >
                <Heart className="w-5 h-5" />
                <span className="text-xs">Reviver</span>
              </button>
              <button
                onClick={() => handlePlayerActionSubmit("kill")}
                className="p-3 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg transition-colors flex flex-col items-center space-y-1"
              >
                <Skull className="w-5 h-5" />
                <span className="text-xs">Matar</span>
              </button>
              <button
                onClick={() => handlePlayerActionSubmit("ban")}
                className="p-3 bg-red-600/20 hover:bg-red-600/30 text-red-300 rounded-lg transition-colors flex flex-col items-center space-y-1"
              >
                <Ban className="w-5 h-5" />
                <span className="text-xs">Banir</span>
              </button>
              <button
                onClick={() => handlePlayerActionSubmit("whitelist_remove")}
                className="p-3 bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-400 rounded-lg transition-colors flex flex-col items-center space-y-1"
              >
                <UserX className="w-5 h-5" />
                <span className="text-xs">Remover WL</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 w-96 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">{modalData.title}</h3>
              <button
                onClick={() => setShowModal(false)}
                className="p-1 hover:bg-slate-800/50 rounded transition-colors"
              >
                <X className="w-5 h-5 text-slate-400" />
              </button>
            </div>

            <form onSubmit={handleModalSubmit} className="space-y-4">
              {(modalType === "kick" ||
                modalType === "ban" ||
                modalType === "unban" ||
                modalType === "revive" ||
                modalType === "kill" ||
                modalType === "warn" ||
                modalType === "whitelist_add" ||
                modalType === "whitelist_remove" ||
                modalType === "set_money" ||
                modalType === "set_item" ||
                modalType === "set_vehicle") && (
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">ID do Jogador</label>
                  <input
                    type="number"
                    name="playerId"
                    required
                    defaultValue={modalData.playerId || ""}
                    className="w-full px-3 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Digite o ID do jogador"
                  />
                </div>
              )}

              {modalType === "set_money" && (
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Valor</label>
                  <input
                    type="number"
                    name="amount"
                    required
                    min="0"
                    className="w-full px-3 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Digite o valor"
                  />
                </div>
              )}

              {modalType === "set_item" && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Nome do Item</label>
                    <input
                      type="text"
                      name="itemName"
                      required
                      className="w-full px-3 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Digite o nome do item"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Quantidade</label>
                    <input
                      type="number"
                      name="quantity"
                      required
                      min="1"
                      defaultValue="1"
                      className="w-full px-3 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </>
              )}

              {modalType === "set_vehicle" && (
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Nome do Veículo</label>
                  <input
                    type="text"
                    name="vehicleName"
                    required
                    className="w-full px-3 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Digite o nome do veículo"
                  />
                </div>
              )}

              {(modalType === "kick" || modalType === "ban" || modalType === "warn") && (
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Motivo</label>
                  <textarea
                    name="reason"
                    required
                    rows={3}
                    className="w-full px-3 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Digite o motivo da ação"
                  />
                </div>
              )}

              {(modalType === "ban" || modalType === "unban") && (
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Tempo (em minutos)</label>
                  <input
                    type="number"
                    name="duration"
                    min="1"
                    className="w-full px-3 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="0 = permanente"
                  />
                </div>
              )}

              <div className="flex space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 px-4 py-2 bg-slate-700/50 hover:bg-slate-700 text-slate-300 rounded-lg transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-lg transition-all"
                >
                  Executar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showPlayerIdModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 w-96 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Setar {itemActionData.item?.name}</h3>
              <button
                onClick={() => setShowPlayerIdModal(false)}
                className="p-1 hover:bg-slate-800/50 rounded transition-colors"
              >
                <X className="w-5 h-5 text-slate-400" />
              </button>
            </div>

            <div className="flex items-center space-x-4 mb-6">
              <img
                src={itemActionData.item?.image || "/placeholder.svg"}
                alt={itemActionData.item?.name}
                className="w-16 h-16 bg-slate-800/50 rounded-lg object-cover"
              />
              <div>
                <p className="text-slate-300 text-sm">Quantidade: {itemActionData.quantity}</p>
                <p className="text-slate-400 text-xs">Categoria: {itemActionData.item?.category}</p>
              </div>
            </div>

            <form onSubmit={handlePlayerIdSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">ID do Jogador</label>
                <input
                  type="number"
                  name="playerId"
                  required
                  className="w-full px-3 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Digite o ID do jogador"
                />
              </div>

              <div className="flex space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowPlayerIdModal(false)}
                  className="flex-1 px-4 py-2 bg-slate-700/50 hover:bg-slate-700 text-slate-300 rounded-lg transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-lg transition-all"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showGroupModal && selectedGroup && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 w-full max-w-md mx-4">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-white">Setar Cargo - {selectedGroup.name}</h3>
              <button
                onClick={() => setShowGroupModal(false)}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">ID do Jogador</label>
                <input
                  type="number"
                  value={groupPlayerId}
                  onChange={(e) => setGroupPlayerId(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Digite o ID do jogador"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Nível do Cargo</label>
                <select
                  value={groupLevel}
                  onChange={(e) => setGroupLevel(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Selecione o nível</option>
                  {Array.from({ length: selectedGroup.maxLevel }, (_, i) => (
                    <option key={i + 1} value={i + 1}>
                      Nível {i + 1}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex space-x-3 mt-6">
              <button
                onClick={() => setShowGroupModal(false)}
                className="flex-1 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={() => {
                  console.log(
                    `Setando cargo ${selectedGroup.name} nível ${groupLevel} para jogador ID ${groupPlayerId}`,
                  )
                  setShowGroupModal(false)
                  setGroupPlayerId("")
                  setGroupLevel("")
                }}
                className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminPanel
