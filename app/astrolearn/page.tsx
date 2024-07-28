"use client"

import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import * as React from "react";
import toast from "react-hot-toast";
import {
    PageTypes,
    astroTeachers,
    astro_short_free_slugs,
    astro_long_free_slugs,
    astro_paid_page_formats,
    astro_free_page_formats,
    source,
} from "@/components/data/astroLearn";

export default function Page() {
    const categoryValue = "tradewise";
    const [teacherList, setTeacherList] = React.useState<Array<string>>(astroTeachers);

    const [pageTypeValue, setPageTypeValue] = React.useState("");
    const [teacherValue, setTeacherValue] = React.useState("");
    const [sourceValue, setSourceValue] = React.useState("");
    const [pageFormatValue, setPageFormatValue] = React.useState("");
    const [uniqueSlugValue, setUniqueSlugValue] = React.useState("");
    const [masterclassIdValue, setMasterclassIdValue] = React.useState("");
    const [commentValue, setCommentValue] = React.useState("");
    const [urlValue, setUrlValue] = React.useState("");

    const [uniqueSlugList, setUniqueSlugList] = React.useState<Array<string>>([]);
    const [pageFormatList, setPageFormatList] = React.useState<Array<string>>([]);

    // this is to choose the pageType
    React.useEffect(() => {
        if (pageTypeValue === "free") {
            setPageFormatList(astro_free_page_formats);
        } else if (pageTypeValue === "paid") {
            setPageFormatList(astro_paid_page_formats);
        }
    }, [pageTypeValue]);

    React.useEffect(() => {
        if (!pageFormatValue || !pageTypeValue || !categoryValue) return;

        if (pageTypeValue === "free") {
            if (pageFormatValue === "short") {
                setUniqueSlugList(astro_short_free_slugs);
            } else if (pageFormatValue === "long") {
                setUniqueSlugList(astro_long_free_slugs);
            }
        } else if (pageTypeValue === "paid") {
            if (pageFormatValue === "video") {
                setUniqueSlugList([]);
            }
        }

        if (teacherValue) {
            setUniqueSlugList((uniqueSlugList) =>
                uniqueSlugList.filter((slug) => {
                    const slugArr = slug.split("-");
                    return slugArr[0] === teacherValue.toLowerCase();
                })
            );
        }
    }, [pageFormatValue, pageTypeValue, teacherValue]);

    const handleURLGenerate = () => {
        if (
            !categoryValue ||
            !pageTypeValue ||
            !teacherValue ||
            !sourceValue ||
            !pageFormatValue ||
            !uniqueSlugValue ||
            !masterclassIdValue ||
            !commentValue
        ) {
            toast.error("Please Enter All the fields", {
                duration: 3000,
                icon: "❌",
            });
            return;
        }
        const domain = "https://www.astrolearn.co"

        const marketing_page_type =
            pageTypeValue === "free"
                ? pageFormatValue === "short"
                    ? "short-free"
                    : "long-free"
                : "paid-video";

        const url = `${domain}/${masterclassIdValue}/${marketing_page_type}/${uniqueSlugValue}?source=${sourceValue}&comment=${commentValue}`;
        toast.success("URL generated successfully", {
            duration: 3000,
            icon: "🚀",
        });
        setUrlValue(url);
        fetch("https://api.counterapi.dev/v1/urlBuilder/countBuild/up")
            .then((res) => {
                res.json()
            })
    };

    const copyRef = React.useRef<HTMLInputElement>(null);

    const handleUrlCopy = () => {
        if (!urlValue) {
            toast.error("Nothing to copy", {
                duration: 3000,
                icon: "❌",
            });
            return;
        }

        copyRef.current?.select();
        window.navigator.clipboard.writeText(urlValue);
        toast.success("URL Copied", {
            duration: 3000,
            icon: "✅",
        });
    };

    const handleReset = () => {
        setPageTypeValue("");
        setTeacherValue("");
        setSourceValue("");
        setPageFormatValue("");
        setUniqueSlugValue("");
        setMasterclassIdValue("");
        setCommentValue("");
        setUrlValue("");
        setTeacherList([]);
        setUniqueSlugList([]);
        setPageFormatList([]);
        toast.success("All Fields Reset", {
            duration: 3000,
            icon: "✅",
        });
    };

    return (
        <div className=" w-full min-h-[95vh] flex justify-center items-center">
            <Card className="w-full max-w-2xl shadow-lg">
                <CardHeader>
                    <div className="text-center">
                        <CardTitle className="  text-4xl">
                            <span className=" text-green-500">Astrolearn </span> URL Builder
                        </CardTitle>
                        <CardDescription className=" mt-6">
                            Fill out the fields below to generate a{" "}
                            <span className=" text-green-500 ">custom URL</span> for Campaigns
                        </CardDescription>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-4">
                        <div className=" w-full flex items-center justify-center ">
                            <div className="w-1/2 space-y-2">
                                <Label htmlFor="teacher-name" className="">Teacher Name</Label>
                                <Select value={teacherValue} onValueChange={setTeacherValue}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select teacher" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {teacherList.map((teacher, ind) => (
                                            <SelectItem key={ind} value={teacher}>
                                                {teacher}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className=" space-y-2">
                                <Label htmlFor="page-type">Page Type</Label>
                                <Select value={pageTypeValue} onValueChange={setPageTypeValue}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select page type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {PageTypes.map((pageType, ind) => (
                                            <SelectItem key={ind} value={pageType}>
                                                {pageType}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="page-format">Page Format</Label>
                                <Select
                                    value={pageFormatValue}
                                    onValueChange={setPageFormatValue}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select page format" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {pageFormatList.map((pageFormat, ind) => (
                                            <SelectItem key={ind} value={pageFormat}>
                                                {pageFormat}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="unique-slug">Unique Slug</Label>
                                <Select
                                    value={uniqueSlugValue}
                                    onValueChange={setUniqueSlugValue}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select unique slug" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {uniqueSlugList.map((slug, ind) => (
                                            <SelectItem key={ind} value={slug}>
                                                {slug}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="source">Source</Label>
                                <Select value={sourceValue} onValueChange={setSourceValue}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select source" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {source.map((source, ind) => (
                                            <SelectItem key={ind} value={source}>
                                                {source}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="masterclass-id">Masterclass ID</Label>
                                <Input
                                    id="masterclass-id"
                                    type="text"
                                    placeholder="Enter Masterclass ID"
                                    value={masterclassIdValue}
                                    onChange={(e) => setMasterclassIdValue(e.target.value)}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="comment">Comment</Label>
                                <Input
                                    id="comment"
                                    type="text"
                                    placeholder="Enter comment"
                                    value={commentValue}
                                    onChange={(e) => setCommentValue(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="flex justify-center gap-2">
                            <Button variant="outline" onClick={handleReset}>
                                Reset
                            </Button>
                            <Button onClick={handleURLGenerate} >Generate</Button>
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-center mb-6">
                    <div className="grid grid-cols-[1fr_auto] items-center gap-4 w-full">
                        <Input
                            ref={copyRef}
                            type="text"
                            readOnly
                            value={
                                urlValue
                                    ? urlValue
                                    : "Domain/masterclassId/page_type/unique_slug?source=””&comment=””"
                            }
                            className="flex-1"
                        />
                        <Button variant="outline" size="sm" onClick={handleUrlCopy}>
                            <CopyIcon className="h-4 w-4 mr-2" />
                            Copy
                        </Button>
                    </div>
                </CardFooter>
            </Card>

        </div>
    )
}


function CopyIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
        </svg>
    );
}