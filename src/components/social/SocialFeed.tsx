"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getSocialPosts, type SocialPost } from "@/lib/social/posts";
import { Instagram, Facebook, Heart, MessageSquare } from "lucide-react";

export function SocialFeed() {
  const [posts, setPosts] = useState<SocialPost[]>([]);

  useEffect(() => {
    getSocialPosts().then(setPosts);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <div className="section-badge mb-4">Live Stream</div>
          <h2 className="text-primary text-5xl font-display uppercase">Últimas Publicaciones</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post) => (
            <a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-2xl border-2 border-slate-100 bg-slate-50"
            >
              <Image
                src={post.imageUrl}
                alt={post.caption}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-50"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="mb-4">
                  {post.platform === 'instagram' ? <Instagram /> : <Facebook />}
                </div>
                <p className="text-center font-body text-sm line-clamp-3 mb-6">{post.caption}</p>
                <div className="flex gap-4">
                  <span className="flex items-center gap-1 text-xs"><Heart className="w-4 h-4" /> 124</span>
                  <span className="flex items-center gap-1 text-xs"><MessageSquare className="w-4 h-4" /> 12</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
