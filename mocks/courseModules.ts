import { Award, BookOpen, Code, Eye, Lock, Play, Shield, Target, Zap } from "lucide-react";

export const courseModules = [
  {
    title: "Basics of Hacking & Cyber Ethics",
    content:
      "Types of Hackers, Attack Vectors, CIA Triad - Understanding cybersecurity fundamentals and ethical boundaries.",
    icon: Shield,
  },
  {
    title: "Linux Command Line & File System Mastery",
    content:
      "Linux basics, terminal commands, file system structure, and permission handling for ethical hacking.",
    icon: Code,
  },
  {
    title: "Active & Passive Footprinting",
    content:
      "Reconnaissance techniques including OSINT to gather intel about targets without detection.",
    icon: Eye,
  },
  {
    title: "Port Scanning & Network Reconnaissance",
    content:
      "Nmap usage for discovering live hosts, open ports, services, and basic network structure.",
    icon: Target,
  },
  {
    title: "Service Enumeration",
    content:
      "Detailed enumeration of services like FTP, SSH, SMB to uncover potential vulnerabilities.",
    icon: Lock,
  },
  {
    title: "Exploiting Vulnerable Services",
    content:
      "Hands-on exploitation with Metasploitable 2, identifying CVEs using Searchsploit.",
    icon: Zap,
  },
  {
    title: "Payload Generation & Shell Access",
    content:
      "Using msfvenom to create payloads, gain reverse shells, and shell upgrades via Python TTY.",
    icon: Play,
  },
  {
    title: "Privilege Escalation",
    content:
      "Linux privilege escalation through SUID files and kernel exploit basics.",
    icon: Award,
  },
  {
    title: "Web Application Attacks",
    content:
      "XSS, SQL Injection, Local File Inclusion (LFI), and file upload bypass techniques.",
    icon: BookOpen,
  },
  {
    title: "Wi-Fi Hacking",
    content:
      "WPA2 handshake capture, Evil Twin attacks using airodump-ng and aircrack-ng.",
    icon: Shield,
  },
  {
    title: "Android Pentesting",
    content:
      "APK reverse engineering, payload injection, and mobile device exploitation.",
    icon: Target,
  },
  {
    title: "Advanced Techniques",
    content:
      "Manual buffer overflow (safe lab), Ngrok port forwarding, AV bypass with payload encoding, and basic digital forensics (metadata & log analysis).",
    icon: Zap,
  },
];
