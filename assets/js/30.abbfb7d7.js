(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{396:function(e,t,a){"use strict";a.r(t);var o=a(32),r=Object(o.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"how-to"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to","aria-hidden":"true"}},[e._v("#")]),e._v(" How To")]),e._v(" "),a("h2",{attrs:{id:"how-to-disable-hyperthreading-smt-without-reboot-kernelcare-case"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-disable-hyperthreading-smt-without-reboot-kernelcare-case","aria-hidden":"true"}},[e._v("#")]),e._v(" How to disable HyperThreading (SMT) without reboot: KernelCare case")]),e._v(" "),a("p",[e._v("This article explains how to disable or enable SMT (Simultaneous multithreading) without rebooting using KernelCare, to help mitigate the recent MDS/Zombieload vulnerability.")]),e._v(" "),a("p",[e._v("Disabling CPU simultaneous multithreading (SMT) is one of the mitigations needed to counter the recent MDS vulnerability (also known as ‘Zombieload’). There is a performance impact that depends on the configuration of the hosting platform and its workload patterns. You should also consider the impact of other mitigation strategies, such as assigning dedicated cores to guests (e.g. VMs).")]),e._v(" "),a("p",[e._v("You can control and get the status of SMT with the kernel’s "),a("code",[e._v("sysfs")]),e._v(" interface. There are two files, both in the "),a("code",[e._v("/sys/devices/system/cpu/smt")]),e._v(" directory:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("control")])]),e._v(" "),a("li",[a("code",[e._v("active")])])]),e._v(" "),a("p",[e._v("If you cannot find the "),a("code",[e._v("/sys/devices/system/cpu/smt")]),e._v(" directory, this means your running kernel does not support SMT. In this case, you need to apply KernelCare patches so the SMT controls become available to your system. Use the "),a("code",[e._v("kcarectrl")]),e._v(" command:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kcarectl --update\nKernel is safe\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("ls -l /sys/devices/system/cpu/smt\n-r--r--r-- 1 root root 4096 May 17 13:06 active\n-rw-r--r-- 1 root root 4096 May 17 13:06 control\n")])])]),a("p",[e._v("As soon as you have these files in place, it is possible to proceed with disabling SMT.")]),e._v(" "),a("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/RUGCvEO1hAE",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}),e._v(" "),a("h3",{attrs:{id:"smt-control"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#smt-control","aria-hidden":"true"}},[e._v("#")]),e._v(" SMT Control")]),e._v(" "),a("p",[a("code",[e._v("/sys/devices/system/cpu/smt/control")])]),e._v(" "),a("p",[e._v("This file lets you enable or disable SMT, and shows its state. There are three values:")]),e._v(" "),a("ol",[a("li",[a("code",[e._v("on")]),e._v(": The CPU supports SMT and it is enabled. All logical CPUs can be taken offline or online without restriction.")]),e._v(" "),a("li",[a("code",[e._v("off")]),e._v(": The CPU supports SMT but it is disabled. Only so-called primary SMT threads can be taken offline/online without restriction. Attempts to put a non-primary sibling thread online will be rejected.")]),e._v(" "),a("li",[a("code",[e._v("notsupported")]),e._v(": The CPU does not support SMT. You will not be able to write to the control file.")])]),e._v(" "),a("h3",{attrs:{id:"smt-status"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#smt-status","aria-hidden":"true"}},[e._v("#")]),e._v(" SMT Status")]),e._v(" "),a("p",[a("code",[e._v("/sys/devices/system/cpu/smt/active")])]),e._v(" "),a("p",[e._v("The contents of this file show the status of SMT (e.g. if two or more sibling threads are active on the same physical core the contents of this file is 1, if not: 0).")]),e._v(" "),a("p",[e._v("Here are some commands to control SMT support (root permissions are required):")]),e._v(" "),a("h4",{attrs:{id:"check-the-smt-state"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#check-the-smt-state","aria-hidden":"true"}},[e._v("#")]),e._v(" Check the SMT state")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("cat /sys/devices/system/cpu/smt/active\n")])])]),a("h4",{attrs:{id:"enable-smt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enable-smt","aria-hidden":"true"}},[e._v("#")]),e._v(" Enable SMT")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("echo on > /sys/devices/system/cpu/smt/control\n")])])]),a("h4",{attrs:{id:"disable-smt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#disable-smt","aria-hidden":"true"}},[e._v("#")]),e._v(" Disable SMT")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("echo off > /sys/devices/system/cpu/smt/control\n")])])]),a("p",[e._v("Disabling SMT, "),a("RouterLink",{attrs:{to:"/how-to/#how-to-update-microcode-without-reboot-with-vendor-provided-package"}},[e._v("updating microcode")]),e._v(", and applying KernelCare patches will protect your systems against the ZombieLoad vulnerability. Note, only the latter action is applicable to virtual systems (e.g. VMs, VPS and other cloud instance types).")],1),e._v(" "),a("h2",{attrs:{id:"how-to-update-microcode-without-reboot-with-vendor-provided-package"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-update-microcode-without-reboot-with-vendor-provided-package","aria-hidden":"true"}},[e._v("#")]),e._v(" How to update Microcode without reboot with vendor-provided package")]),e._v(" "),a("p",[e._v("This article shows how to update the microcode of Intel CPUs running Linux.")]),e._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("Warning")]),a("p",[e._v("To avoid possible issues with Microcode updating, enable SMT before the update.")])]),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),a("p",[e._v("This article is subject to change and will be updated with instructions for other distributions.")])]),a("p",[a("strong",[e._v("Contents:")])]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/how-to/#updating-microcode-on-ubuntu-and-debian"}},[e._v("Updating microcode on Ubuntu and Debian")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/how-to/#updating-microcode-on-red-hat-and-centos"}},[e._v("Updating microcode on Red Hat Enterprise Linux (and derivatives)")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/how-to/#updating-microcode-on-centos-6"}},[e._v("Updating Microcode on CentOS 6")])],1)]),e._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("Notes")]),a("ul",[a("li",[e._v("These steps must be done as root.")]),e._v(" "),a("li",[e._v("The examples shown are for Debian.")]),e._v(" "),a("li",[e._v("If you have doubts your systems are fully protected against CPU- and kernel-related vulnerabilities, please "),a("a",{attrs:{href:"mailto:sales@cloudlinux.com"}},[e._v("get in touch with us")]),e._v(".")])])]),a("h3",{attrs:{id:"updating-microcode-on-ubuntu-and-debian"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#updating-microcode-on-ubuntu-and-debian","aria-hidden":"true"}},[e._v("#")]),e._v(" Updating microcode on Ubuntu and Debian")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Find the microcode package download link for your platform")]),e._v(" "),a("ul",[a("li",[e._v("Ubuntu: "),a("a",{attrs:{href:"https://usn.ubuntu.com/3977-1/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://usn.ubuntu.com/3977-1/"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Debian: "),a("a",{attrs:{href:"https://packages.debian.org/search?keywords=intel-microcode",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://packages.debian.org/search?keywords=intel-microcode"),a("OutboundLink")],1)])])]),e._v(" "),a("li",[a("p",[e._v("Download the package")])])]),e._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),a("p",[e._v("Example shown for Debian 9")])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("cd <a temporary directory, e.g. /tmp>\nmkdir firmware\ncd firmware\nwget http://security.debian.org/debian-security/pool/updates/non-free/i/intel-microcode/intel-microcode_3.20190514.1~deb9u1_amd64.deb\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[e._v("Check the downloaded package")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("md5sum intel-microcode_3.20190514.1~deb9u1_amd64.deb\nc7bc9728634137453e0f4821fb6bb436  intel-microcode_3.20190514.1~deb9u1_amd64.deb\n")])])]),a("p",[e._v("A list of checksums is on "),a("a",{attrs:{href:"https://packages.debian.org/stretch/amd64/intel-microcode/download",target:"_blank",rel:"noopener noreferrer"}},[e._v("the Debian packages download page"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[e._v("Unpack the package")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("dpkg -x intel-microcode_3.20190514.1~deb9u1_amd64.deb\n")])])]),a("ol",{attrs:{start:"5"}},[a("li",[e._v("Check the unpacked files")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("ls -l\ntotal 1896\ndrwxr-xr-x 5 root root   53 May 15 04:18 etc\n-rw-r--r-- 1 root root 1940140 May 17 11:42 intel-microcode_3.20190514.1~deb9u1_amd64.deb\ndrwxr-xr-x 3 root root   22 May 15 04:18 lib\ndrwxr-xr-x 3 root root   19 May 15 04:18 usr\n")])])]),a("ol",{attrs:{start:"6"}},[a("li",[e._v("Create a backup of existing microcode:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("test -d /lib/firmware/intel-ucode/ && mv /lib/firmware/intel-ucode/ /lib/firmware/intel-ucode.backup\n")])])]),a("ol",{attrs:{start:"7"}},[a("li",[e._v("Copy the new microcode and check it")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("cp -r lib/firmware/intel-ucode/ /lib/firmware/\nls -l /lib/firmware/ | grep intel-ucode\ndrwxr-xr-x  2 root root 4096 May 17 11:47 intel-ucode\ndrwxr-xr-x  2 root root 4096 May 16 20:54 intel-ucode.backup\n")])])]),a("ol",{attrs:{start:"8"}},[a("li",[e._v("Check the current microcode version")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("dmesg | grep microcode\n[ 2.254717] microcode: sig=0x306a9, pf=0x10, revision=0x12\n[ 2.254820] microcode: Microcode Update Driver: v2.01 <tigran@aivazian.fsnet.co.uk>, Peter Oruba\n")])])]),a("ol",{attrs:{start:"9"}},[a("li",[e._v("(Optional) Double check the current microcode versions (revisions per core)")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("cat /proc/cpuinfo | grep -e microcode\nmicrocode : 0x12\nmicrocode : 0x12\nmicrocode : 0x12\nmicrocode : 0x12\n")])])]),a("ol",{attrs:{start:"10"}},[a("li",[e._v("Check the microcode reload file exists")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("ls -l /sys/devices/system/cpu/microcode/reload\n--w------- 1 root root 4096 May 17 11:54 /sys/devices/system/cpu/microcode/reload\n")])])]),a("ol",{attrs:{start:"11"}},[a("li",[e._v("Force the kernel to load the new microcode")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("echo 1 > /sys/devices/system/cpu/microcode/reload\n")])])]),a("ol",{attrs:{start:"12"}},[a("li",[e._v("Check the new microcode")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("dmesg | grep microcode\n[ 2.254717] microcode: sig=0x306a9, pf=0x10, revision=0x12\n[ 2.254820] microcode: Microcode Update Driver: v2.01 <tigran@aivazian.fsnet.co.uk>, Peter Oruba\n[ 1483.494573] platform microcode: firmware: direct-loading firmware intel-ucode/06-3a-09\n[ 1483.495985] microcode: updated to revision 0x21, date = 2019-02-13\n[ 1483.496012] platform microcode: firmware: direct-loading firmware intel-ucode/06-3a-09\n[ 1483.496698] platform microcode: firmware: direct-loading firmware intel-ucode/06-3a-09\n[ 1483.497391] platform microcode: firmware: direct-loading firmware intel-ucode/06-3a-09\n")])])]),a("ol",{attrs:{start:"13"}},[a("li",[e._v("(Optional) Double check the new microcode version (revisions per core)")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("cat /proc/cpuinfo | grep -e microcode\nmicrocode : 0x21\nmicrocode : 0x21\nmicrocode : 0x21\nmicrocode : 0x21\n")])])]),a("h3",{attrs:{id:"updating-microcode-on-red-hat-and-centos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#updating-microcode-on-red-hat-and-centos","aria-hidden":"true"}},[e._v("#")]),e._v(" Updating Microcode on Red Hat and CentOS")]),e._v(" "),a("p",[e._v("For RHEL-based distributions, you can use the "),a("code",[e._v("microcode_ctl utility")]),e._v(" to update microcode.")]),e._v(" "),a("ol",[a("li",[e._v("Get the latest microcode by updating the "),a("code",[e._v("microcode_ctl")]),e._v(" package")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("yum update microcode_ctl\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[e._v("Create a force file")])]),e._v(" "),a("p",[e._v("Create a "),a("code",[e._v("force-late-intel–06–4f–01")]),e._v(" inside the firmware directory.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("touch /lib/firmware/`uname -r`/force-late-intel-06-4f-01\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[e._v("Run the microcode update")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("/usr/libexec/microcode_ctl/update_ucode\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[e._v("Force the kernel to load the new microcode")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("echo 1 > /sys/devices/system/cpu/microcode/reload\n")])])]),a("ol",{attrs:{start:"5"}},[a("li",[e._v("Check the new microcode")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("dmesg | grep microcode\n[ 2.254717] microcode: sig=0x306a9, pf=0x10, revision=0x12\n[ 2.254820] microcode: Microcode Update Driver: v2.01 <tigran@aivazian.fsnet.co.uk>, Peter Oruba\n[ 1483.494573] platform microcode: firmware: direct-loading firmware intel-ucode/06-3a-09\n[ 1483.495985] microcode: updated to revision 0x21, date = 2019-02-13\n[ 1483.496012] platform microcode: firmware: direct-loading firmware intel-ucode/06-3a-09\n[ 1483.496698] platform microcode: firmware: direct-loading firmware intel-ucode/06-3a-09\n[ 1483.497391] platform microcode: firmware: direct-loading firmware intel-ucode/06-3a-09\n")])])]),a("ol",{attrs:{start:"6"}},[a("li",[e._v("(Optional) Double check the new microcode version (revisions per core)")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("cat /proc/cpuinfo | grep -e microcode\nmicrocode : 0x21\nmicrocode : 0x21\nmicrocode : 0x21\nmicrocode : 0x21\n")])])]),a("h3",{attrs:{id:"updating-microcode-on-centos-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#updating-microcode-on-centos-6","aria-hidden":"true"}},[e._v("#")]),e._v(" Updating Microcode on CentOS 6")]),e._v(" "),a("ol",[a("li",[e._v("Get the latest microcode by updating the "),a("code",[e._v("microcode_ctl")]),e._v(" package")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("yum update microcode_ctl\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[e._v("If "),a("code",[e._v("yum update microcode_ctl")]),e._v(" outputs the following:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Package(s) microcode_ctl available, but not installed.\nNo Packages marked for Update\n")])])]),a("p",[e._v("you need to install the package manually.")]),e._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[e._v("To install "),a("code",[e._v("microcode_ctl")]),e._v(" package, run the command:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("yum install microcode_ctl\n")])])]),a("p",[e._v("The command output:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Installed:\n  microcode_ctl.x86_64 2:1.17-33.11.el6_10                                                                                                                                 \n\nComplete!\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[e._v("Check CPU microcode version:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("cat /proc/cpuinfo | grep microcode\nmicrocode       : 9\nmicrocode       : 9\nmicrocode       : 9\nmicrocode       : 9\n")])])]),a("ol",{attrs:{start:"5"}},[a("li",[e._v("Try to update microcode")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("microcode_ctl -u\n")])])]),a("p",[e._v("If you see the output:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("microcode_ctl: writing microcode (length: 2370560)\nmicrocode_ctl: cannot open /dev/cpu/microcode for writing errno=2 (No such file or directory)\n")])])]),a("p",[e._v("You need to load driver microcode.")]),e._v(" "),a("ol",{attrs:{start:"6"}},[a("li",[e._v("Load driver microcode")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("modprobe microcode\n")])])]),a("ol",{attrs:{start:"7"}},[a("li",[e._v("Try to update microcode again:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("microcode_ctl -u\n")])])]),a("p",[e._v("If you see the output:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("microcode_ctl: writing microcode (length: 2370560)\nmicrocode_ctl: microcode successfully written to /dev/cpu/microcode\n")])])]),a("p",[e._v("then update is successful.")]),e._v(" "),a("ol",{attrs:{start:"8"}},[a("li",[e._v("Check version:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("cat /proc/cpuinfo | grep microcode\nmicrocode       : 17\nmicrocode       : 17\nmicrocode       : 17\nmicrocode       : 17\n")])])]),a("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/EydWy-b9uns",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}),e._v(" "),a("h2",{attrs:{id:"plesk-related"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plesk-related","aria-hidden":"true"}},[e._v("#")]),e._v(" Plesk related")]),e._v(" "),a("h3",{attrs:{id:"how-to-get-a-kernelcare-activation-key-from-the-extended-plesk-license"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-get-a-kernelcare-activation-key-from-the-extended-plesk-license","aria-hidden":"true"}},[e._v("#")]),e._v(" How to get a KernelCare activation key from the extended Plesk license")]),e._v(" "),a("p",[e._v("Often our clients purchase KernelCare licenses through Plesk/Odin and in such cases, they get a universal key which includes the KernelCare license and other additional keys for Plesk plugins. Such a key has the following syntax – "),a("code",[e._v("A00B00-0CDE00-F0G000-HIGK00-LM0N00")]),e._v(", – and initially, it is installed through Plesk automatically and the license gets activated successfully.")]),e._v(" "),a("p",[e._v("However, if it is required to re-register the agent for some reason or simply get the KernelCare activation key separately, it would be impossible to apply the above-mentioned one – we would need to deal with the KernelCare service separately.")]),e._v(" "),a("p",[e._v("To get the KernelCare activation key from the extended Plesk license key, you will need to proceed with the following.")]),e._v(" "),a("ol",[a("li",[e._v("Navigate to "),a("em",[e._v("Tools & Settings >> Plesk >> License Management >> Additional License Keys")])])]),e._v(" "),a("p",[a("img",{attrs:{src:"/images/LicenseManagement.png",alt:""}})]),e._v(" "),a("p",[a("img",{attrs:{src:"/images/AdditionalLicenseKeys.png",alt:""}})]),e._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[a("p",[e._v("Click "),a("em",[e._v("Download key")]),e._v(" next to the KernelCare license listed on the page and open the file downloaded in some text editor")])]),e._v(" "),a("li",[a("p",[e._v("Find the following abstract:")])])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('\x3c!--Key body--\x3e\n<aps-3:key-body core:encoding="base64" core:type="binary">YOUR_BASE64_ENCODED_LICENSE_KEY==</aps-3:key-body>\n\x3c!--Information about additional key--\x3e\n')])])]),a("ol",{attrs:{start:"4"}},[a("li",[a("p",[e._v("This is your base64-encoded key, and it should be decoded using a CLI utility or an online base64 decoder into UTF-8, e.g. "),a("a",{attrs:{href:"https://www.base64decode.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.base64decode.org"),a("OutboundLink")],1),e._v(".\nThe new license key should have the following format: "),a("code",[e._v("xxxxxxxxxxxxxxxx")]),e._v(". It will contain lower and upper case letters and numbers.")])]),e._v(" "),a("li",[a("p",[e._v("Use the new key decoded to activate the service:")])])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("/usr/bin/kcarectl --register DECODED_KEY_HERE\n")])])]),a("p",[e._v("This is it!")])])},[],!1,null,null,null);t.default=r.exports}}]);